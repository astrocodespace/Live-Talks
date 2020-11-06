<?php

namespace App\Controller\Web;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ClientZoneController
 * @package App\Controller\Web
 *
 * @Route(host="client.%domain%")
 */
class ClientZoneController extends AbstractController
{
    /**
     * @Route("/", name="web_client_zone")
     */
    public function index(): Response
    {
        return $this->render('web/client_zone/index.html.twig', [
            'props' => [],
        ]);
    }
}
