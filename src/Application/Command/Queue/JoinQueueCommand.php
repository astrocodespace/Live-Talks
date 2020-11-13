<?php

namespace App\Application\Command\Queue;

use Ramsey\Uuid\Uuid;

class JoinQueueCommand
{
    public int $clientId;

    public Uuid $serviceId;

    /**
     * JoinQueueCommand constructor.
     * @param int $clientId
     * @param Uuid $serviceId
     */
    public function __construct(int $clientId,
                                Uuid $serviceId)
    {
        $this->clientId = $clientId;
        $this->serviceId = $serviceId;
    }


}