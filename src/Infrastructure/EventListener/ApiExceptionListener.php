<?php

namespace App\Infrastructure\EventListener;

use App\Exception\ApiException;
use App\Utils\ResponseMessage;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;

class ApiExceptionListener
{
    public function __invoke(ExceptionEvent $event)
    {
        /** @var ApiException|Exception $exception */
        $exception = $event->getThrowable();
        if ( !($exception instanceof ApiException) ) {
            return;
        }

        $response = new JsonResponse([
            'status' => ResponseMessage::ERROR_MESSAGE,
            'message' => $exception->getMessage(),
            'code' => $exception->getErrorCode()
        ], $exception->getHttpStatusCode());

        $event->setResponse($response);
    }
}