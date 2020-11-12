<?php

namespace App\Ui\Controller\Api;

use Knp\Component\Pager\Pagination\PaginationInterface;

trait ApiPaginationTrait
{
    public function createView(PaginationInterface $pagination)
    {
        return [
            'items' => $pagination->getItems(),
            'currentPage' => $pagination->getCurrentPageNumber(),
            'totalItems'=> $pagination->getTotalItemCount(),
            'itemsPerPage' => $pagination->getItemNumberPerPage(),
        ];
    }
}