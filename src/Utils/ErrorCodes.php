<?php

namespace App\Utils;

class ErrorCodes
{
    // AUTH ERRORS
    const AUTHENTICATION_ERROR = 1;
    const NOT_AUTHENTICATED_ERROR = 2;
    const INVALID_PASSWORD_ERROR = 3;
    const USER_NOT_FOUND_ERROR = 4;

    public static function getCode(string $type): string
    {
        return 'LT-' . str_pad($type, 3, '0', STR_PAD_LEFT);
    }
}