<?php

namespace App\Controller\Api;

use App\Entity\Client;
use App\Exception\AuthenticationException;
use App\Exception\NotAuthenticatedException;
use App\Exception\UserNotFoundException;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

/**
 * Class SecurityController
 * @package App\Controller\Api
 *
 * @Route("/auth", host="api.%domain%")
 *
 */
class SecurityController extends AbstractController
{
    /**
     * @Route("/login", name="api_login", methods={"POST"})
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        $user = $this->getUser();

        return $this->json([
            'email' => $user->getUsername(),
            'roles' => $user->getRoles(),
        ]);
    }

    /**
     * @return Response
     * @Route("/user", name="api_user", methods={"GET"})
     * @IsGranted("ROLE_USER")
     */
    public function user(): Response
    {
        $user = $this->getUser();

        if (!$user) {
            throw new NotAuthenticatedException();
        }

        return new JsonResponse([
            'data' => [
                'id' => $user->getId(),
                'email' => $user->getUsername(),
                'firstName' => $user->getFirstName(),
                'lastName' => $user->getLastName(),
                'discriminator' => ($user instanceof Client) ? 'client' : 'employee'
            ]
        ]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
