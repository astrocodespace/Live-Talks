<?php

namespace App\Infrastructure\MercureEvent\Queue;

use App\Infrastructure\MercureEvent\MercureEvent;

class UserJoined implements MercureEvent
{
    public $queueId;

    public $onPosition;

    /**
     * UserJoined constructor.
     * @param $queueId
     * @param $onPosition
     */
    public function __construct($queueId, $onPosition)
    {
        $this->queueId = $queueId;
        $this->onPosition = $onPosition;
    }


    public function toArray(): array
    {
        return [
            'queueId' => $this->queueId,
            'onPosition' => $this->onPosition
        ];
    }

}