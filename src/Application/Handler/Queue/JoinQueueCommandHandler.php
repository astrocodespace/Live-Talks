<?php

namespace App\Application\Handler\Queue;

use App\Application\Command\Queue\JoinQueueCommand;
use App\Infrastructure\Repository\ServiceRepository;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;

class JoinQueueCommandHandler implements MessageHandlerInterface
{
    /**
     * @var ServiceRepository
     */
    private ServiceRepository $repository;

    public function __construct(ServiceRepository $repository)
    {
        $this->repository = $repository;
    }

    public function __invoke(JoinQueueCommand $command)
    {
        $service = $this->repository->find($command->serviceId);

    }
}