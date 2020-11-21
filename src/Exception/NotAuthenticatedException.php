<?php

namespace App\Exception;

use App\Utils\ErrorCodes;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class NotAuthenticatedException extends \Exception implements ApiException
{
    const MESSAGE = 'User not loggged in.';
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
        return ErrorCodes::getCode(ErrorCodes::NOT_AUTHENTICATED_ERROR);
    }

}