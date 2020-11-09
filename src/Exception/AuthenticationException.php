<?php

namespace App\Exception;

use App\Utils\ErrorCodes;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class AuthenticationException extends \Exception implements ApiException
{
    const MESSAGE = 'Could not authenticate user with given credentials';
    public function __construct(Throwable $previous = null)
    {
        parent::__construct(
            self::MESSAGE,
            0,
            $previous
        );
    }

    public function getHttpStatusCode(): int
    {
        return Response::HTTP_UNAUTHORIZED;
    }

    public function getErrorCode(): string
    {
        return ErrorCodes::getCode(ErrorCodes::AUTHENTICATION_ERROR);
    }
}