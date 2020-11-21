<?php

namespace App\Utils;

class PaginatedData
{
    public $items;

    public $currentPage;

    public $totalItems;

    public $itemsPerPage;

    public function __construct($data)
    {
        $this->items = $data['items'];
        $this->currentPage = $data['currentPage'];
        $this->totalItems = $data['totalItems'];
        $this->itemsPerPage = $data['itemsPerPage'];
    }
}