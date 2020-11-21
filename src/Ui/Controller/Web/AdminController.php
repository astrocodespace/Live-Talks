<?php

namespace App\Ui\Controller\Web;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AdminController
 * @package App\Ui\Controller\Web
 *
 * @Route(host="admin.%domain%")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/", name="web_admin")
     */
    public function index()
    {
        return $this->render('web/admin/index.html.twig', [
            'props' => [],
        ]);
    }
}
