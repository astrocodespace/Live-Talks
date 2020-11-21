<?php

namespace App\Application\Query\Service;

use App\Infrastructure\Repository\ServiceRepository;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;

class Paginated
{
    /**
     * @var PaginatorInterface
     */
    private PaginatorInterface $paginator;

    /**
     * @var ServiceRepository
     */
    private ServiceRepository $repository;

    public function __construct(ServiceRepository $repository,
                                PaginatorInterface $paginator)
    {
        $this->repository = $repository;
        $this->paginator = $paginator;
    }

    public function __invoke(?int $page = 1,
                             ?int $resultsPerPage = 10,
                             ?string $alias = 's'): PaginationInterface
    {
        $query = $this->repository
            ->createQueryBuilder($alias)
            ->getQuery();

        return $this->paginator->paginate(
            $query,
            $page,
            $resultsPerPage
        );
    }
}