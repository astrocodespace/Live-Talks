<?php

namespace App\Infrastructure\Security;

use App\Domain\User;
use App\Exception\ApiException;
use App\Exception\AuthenticationException;
use App\Exception\InvalidPasswordException;
use App\Exception\NotAuthenticatedException;
use App\Exception\UserNotFoundException;
use App\Utils\ErrorCodes;
use App\Utils\ResponseMessage;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException as CoreAuthenticationException;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;
use Symfony\Component\Security\Guard\PasswordAuthenticatedInterface;
use Symfony\Component\Security\Http\Util\TargetPathTrait;

class AppAuthenticator extends AbstractGuardAuthenticator implements PasswordAuthenticatedInterface
{
    use TargetPathTrait;

    public const LOGIN_ROUTE = 'api_login';

    private EntityManagerInterface $entityManager;
    private UrlGeneratorInterface $urlGenerator;
    private CsrfTokenManagerInterface $csrfTokenManager;
    private UserPasswordEncoderInterface $passwordEncoder;

    /**
     * AppAuthenticator constructor.
     * @param EntityManagerInterface $entityManager
     * @param UrlGeneratorInterface $urlGenerator
     * @param CsrfTokenManagerInterface $csrfTokenManager
     * @param UserPasswordEncoderInterface $passwordEncoder
     */
    public function __construct(EntityManagerInterface $entityManager,
                                UrlGeneratorInterface $urlGenerator,
                                CsrfTokenManagerInterface $csrfTokenManager,
                                UserPasswordEncoderInterface $passwordEncoder)
    {
        $this->entityManager = $entityManager;
        $this->urlGenerator = $urlGenerator;
        $this->csrfTokenManager = $csrfTokenManager;
        $this->passwordEncoder = $passwordEncoder;
    }

    /**
     * @param Request $request
     * @return bool
     */
    public function supports(Request $request): bool
    {
        return self::LOGIN_ROUTE === $request->attributes->get('_route')
            && $request->isMethod('POST');
    }

    /**
     * @param Request $request
     * @return array|mixed
     */
    public function getCredentials(Request $request): array
    {
        $data = json_decode($request->getContent(), true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new BadRequestHttpException('invalid json body: ' . json_last_error_msg());
        }

        $request->request->replace(is_array($data) ? $data : array());

        $credentials = [
            'email' => $request->request->get('email'),
            'password' => $request->request->get('password'),
        ];

        $request->getSession()->set(
            Security::LAST_USERNAME,
            $credentials['email']
        );

        return $credentials;
    }

    /**
     * @param mixed $credentials
     * @param UserProviderInterface $userProvider
     * @return object|UserInterface|null
     */
    public function getUser($credentials, UserProviderInterface $userProvider): UserInterface
    {
        $user = $this->entityManager->getRepository(User::class)->findOneBy(['email' => $credentials['email']]);

        if (!$user) {
            // fail authentication with a custom error
            throw new UserNotFoundException();
        }

        return $user;
    }

    /**
     * @param mixed $credentials
     * @param UserInterface $user
     * @return bool
     * @throws UserNotFoundException
     */
    public function checkCredentials($credentials, UserInterface $user): bool
    {
        if ($valid = $this->passwordEncoder->isPasswordValid($user, $credentials['password'])) {
            return $this->passwordEncoder->isPasswordValid($user, $credentials['password']);
        }

        throw new InvalidPasswordException();
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    public function getPassword($credentials): ?string
    {
        return $credentials['password'];
    }

    /**
     * @param Request $request
     * @param TokenInterface $token
     * @param string $providerKey
     * @return JsonResponse|Response|null
     * @throws AuthenticationException
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $providerKey): JsonResponse
    {
            return new JsonResponse([
                'status' => ResponseMessage::SUCCESS_MESSAGE,
            ]);
    }

    /**
     * @param Request $request
     * @param CoreAuthenticationException $exception
     * @return Response|void|null
     * @throws AuthenticationException
     */
    public function onAuthenticationFailure(Request $request, CoreAuthenticationException $exception): void
    {
        $message = $exception->getMessage();

        $code = 'AUTH';
        $exception = new class($message, $code) extends \Exception implements ApiException {

            protected $code;

            public function __construct($message, $code)
            {
                $this->code = $code;
                parent::__construct($message, 0, null);
            }

            public function getHttpStatusCode(): int
            {
                return Response::HTTP_UNAUTHORIZED;
            }

            public function getErrorCode(): string
            {
                return ErrorCodes::getCode($this->code);
            }


        };

        throw new $exception($message, 'AUTH');
    }

    /**
     * @return bool
     */
    public function supportsRememberMe(): bool
    {
        return true;
    }

    /**
     * @param Request $request
     * @param CoreAuthenticationException|null $authException
     * @return Response|void
     * @throws UserNotFoundException
     */
    public function start(Request $request, CoreAuthenticationException $authException = null): void
    {
        throw new NotAuthenticatedException();
    }


}
