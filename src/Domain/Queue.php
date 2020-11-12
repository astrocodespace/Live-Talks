<?php

namespace App\Domain;

use App\Infrastructure\Repository\QueueRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=QueueRepository::class)
 * @ORM\Table(name="queues")
 */
class Queue
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    private ArrayCollection $participants;

    public function __construct()
    {
        $this->participants = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function join(Client $client)
    {
        $this->participants->add(
            new QueueParticipation(
                $this->participants->count() + 1,
                $client,
                $this
            )
        );
    }

    public function leave(QueueParticipation $participation)
    {
        if (!$this->participants->contains($participation)) {
            throw new \Exception('User does not belongs to queue'); // @TODO: Custom exception
        }

        $this->participants->removeElement($participation);
    }
}
