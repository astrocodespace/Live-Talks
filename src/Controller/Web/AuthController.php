<?php

namespace App\Controller\Web;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ClientZoneController
 * @package App\Controller\Web
 *
 * @Route(host="auth.%domain%")
 */
class AuthController extends AbstractController

{
    /**
     * @Route("/", name="web_login")
     */
    public function auth()
    {
        return $this->render('web/auth/index.html.twig', [
            'props' => [],
        ]);
    }
}