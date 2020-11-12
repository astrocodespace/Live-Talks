<?php

namespace App\Ui\Controller\Web;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ClientZoneController
 * @package App\Controller\Web
 *
 * @Route(host="client.%domain%")
 * @IsGranted("ROLE_USER")
 */
class ClientZoneController extends AbstractController
{
    /**
     * @Route("/", name="web_client_zone")
     */
    public function index(): Response
    {
        if (!$this->getUser()) {
            return $this->redirectToRoute('web_login');
        }

        return $this->render('web/client_zone/index.html.twig', [
            'props' => [],
        ]);
    }
}
