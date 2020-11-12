<?php

namespace App\Ui\Controller\Api;

use JMS\Serializer\SerializationContext;

trait ApiSerializationTrait
{
    public function getContext($groups = [])
    {
        $context = SerializationContext::create();
        $context->setGroups($groups);

        return $context;
    }
}