<?php

namespace App\Console;

use App\Entity\Client;
use App\Repository\ClientRepository;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class CreateClientUserCommannd extends Command
{
    protected static $defaultName = 'client:create-user';

    protected ClientRepository $clientRepository;

    protected UserPasswordEncoderInterface $userPasswordEncoder;

    public function __construct(string $name = null,
                                ClientRepository $clientRepository,
                                UserPasswordEncoderInterface $passwordEncoder)
    {
        parent::__construct($name);

        $this->userPasswordEncoder = $passwordEncoder;
        $this->clientRepository = $clientRepository;
    }

    protected function configure()
    {
        $this
            ->setDescription('Creates an client user');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $helper = $this->getHelper('question');

        // User email input
        $question = new Question("Enter email of the user:\n", 'test@example.com');
        $userEmail = $helper->ask($input, $output, $question);

        // User password input
        $question = new Question("Enter password:\n");
        $question->setHidden(true);
        $question->setHiddenFallback(false);
        $password = $helper->ask($input, $output, $question);

        $client = new Client();
        $client->setPassword($this->userPasswordEncoder->encodePassword($client, $password));
        $client->setEmail($userEmail);
        $client->setFirstName('Test');
        $client->setLastName('Test');

        $this->clientRepository->save($client);

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return Command::SUCCESS;
    }
}
