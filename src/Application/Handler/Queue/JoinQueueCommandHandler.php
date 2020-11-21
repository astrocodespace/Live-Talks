<?php

namespace App\Application\Handler\Queue;

use App\Application\Command\Queue\JoinQueueCommand;
use App\Domain\Queue;
use App\Domain\Service;
use App\Infrastructure\MercureEvent\Queue\UserJoined;
use App\Infrastructure\Repository\ClientRepository;
use App\Infrastructure\Repository\ServiceRepository;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Messenger\Handler\MessageHandlerInterface;
use Symfony\Component\Messenger\MessageBusInterface;

class JoinQueueCommandHandler implements MessageHandlerInterface
{
    /**
     * @var ClientRepository
     */
    private ClientRepository $clientRepository;

    /**
     * @var ServiceRepository
     */
    private ServiceRepository $serviceRepository;

    /**
     * @var MessageBusInterface
     */
    private MessageBusInterface $messageBus;

    public function __construct(ServiceRepository $serviceRepository,
                                ClientRepository $clientRepository,
                                MessageBusInterface $messageBus)
    {
        $this->serviceRepository = $serviceRepository;
        $this->clientRepository = $clientRepository;
        $this->messageBus = $messageBus;
    }

    public function __invoke(JoinQueueCommand $command)
    {
        /** @var Service $service */
        $service = $this->serviceRepository->find($command->serviceId);

        // @TODO: Optimize this part
        /** @var Queue[] $queuesByParticipantsCount */
        $queuesByParticipantsCount = [];
        foreach ($service->getRooms() as $room) {
            $queuesByParticipantsCount[$room->getQueue()->length()] = $room->getQueue();
        }

        $queue = $queuesByParticipantsCount[min(array_keys($queuesByParticipantsCount))];
        $position = $queue->join($this->clientRepository->find($command->clientId));

        // DISPATCHING EVENT TO MERCURE
        $this->messageBus->dispatch(new Update(
            sprintf('queue://%s', $queue->getId()),
            json_encode((array) new UserJoined($queue->getId(), $position)),
            true
        ));

        return [
            'queueId' => $queue->getId(),
            'position' => $position,
            'service' => [
                'uuid' => $service->getUuid(),
                'name' => $service->getName()
            ]
        ];
    }
}