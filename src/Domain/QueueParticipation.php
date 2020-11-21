<?php

namespace App\Domain;

use Doctrine\ORM\Mapping as ORM;

/**
 * Class QueueParticipation
 * @package App\Domain
 *
 * @ORM\Table(name="queues_participations", schema="queues")
 * @ORM\Entity()
 */
final class QueueParticipation
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private int $id;

    /**
     * @ORM\Column(type="integer")
     */
    private int $position;

    /**
     * @ORM\ManyToOne(targetEntity="Client", inversedBy="queuesParticipations")
     * @ORM\JoinColumn(name="client_id", referencedColumnName="id")
     */
    private Client $client;

    /**
     * @ORM\ManyToOne (targetEntity="Queue", inversedBy="participants")
     * @ORM\JoinColumn(name="queue_id", referencedColumnName="id")
     */
    private Queue $queue;

    public function __construct(
        int $position,
        Client $client,
        Queue $queue
    ) {
        $this->position = $position;
        $this->client = $client;
        $this->queue = $queue;
    }
}