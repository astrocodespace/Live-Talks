<?php

namespace App\Domain;

use App\Infrastructure\Repository\ClientRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ClientRepository::class)
 * @ORM\Table(name="clients")
 */
final class Client extends User
{

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="QueueParticipation", mappedBy="client")
     */
    private $queuesParticipations;

    public function __construct()
    {
        $this->queuesParticipations = new ArrayCollection();
    }
}
