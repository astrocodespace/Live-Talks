<?php

namespace App\Exception;

use App\Utils\ErrorCodes;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class InvalidPasswordException extends \Exception implements ApiException
{
    const MESSAGE = 'Invalid password';

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
        return Response::HTTP_BAD_REQUEST;
    }

    public function getErrorCode(): string
    {
        return ErrorCodes::getCode(ErrorCodes::INVALID_PASSWORD_ERROR);
    }

}