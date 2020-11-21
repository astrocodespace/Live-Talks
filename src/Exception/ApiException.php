<?php

namespace App\Exception;

interface ApiException
{
    public function getHttpStatusCode(): int;

    public function getErrorCode(): string;
}