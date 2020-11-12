<?php

namespace App\Ui\Controller\Api;

use App\Application\Query\Service\Paginated;
use App\Infrastructure\Repository\ServiceRepository;
use App\Utils\PaginatedData;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ServiceController
 * @package App\Ui\Controller\Api
 *
 * @Route("/v1/service", host="api.%domain%")
 */
class ServiceController extends AbstractController
{
    use ApiSerializationTrait, ApiPaginationTrait;

    /**
     * @param Request $request
     * @param Paginated $paginated
     * @param SerializerInterface $serializer
     * @return JsonResponse
     *
     * @Route("", name="service_list", methods={"GET"})
     *
     */
    public function index(Request $request,
                          Paginated $paginated,
                          SerializerInterface $serializer)
    {
        $results = $paginated(
            $request->get('page') ?? 1,
            $request->get('per_page') ?? 10
        );

        return new JsonResponse(
            $serializer->serialize(
                new PaginatedData($this->createView($results)),
                'json',
                $this->getContext(['Default', 'items' => ['service_list']])
            ),
            Response::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @param $id
     * @param ServiceRepository $repository
     * @param SerializerInterface $serializer
     * @return JsonResponse
     *
     * @Route("/{id}", name="service_single", methods={"GET"})
     */
    public function show($id,
                         ServiceRepository $repository,
                         SerializerInterface $serializer)
    {
        return new JsonResponse(
            $serializer->serialize(
                $repository->find($id),
                'json',
                $this->getContext(['service_details'])
            ),
            Response::HTTP_OK,
            [],
            true
        );
    }
}