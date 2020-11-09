<?php

namespace App\Exception;

use App\Utils\ErrorCodes;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class UserNotFoundException extends \Exception implements ApiException
{
    const MESSAGE = 'No user with such email.';

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
        return Response::HTTP_NOT_FOUND;
    }

    public function getErrorCode(): string
    {
        return ErrorCodes::getCode(ErrorCodes::USER_NOT_FOUND_ERROR);
    }

}