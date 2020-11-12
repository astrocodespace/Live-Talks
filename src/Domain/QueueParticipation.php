<?php

namespace App\Domain;

class QueueParticipation
{
    private int $id;

    private int $position;

    private Client $client;

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