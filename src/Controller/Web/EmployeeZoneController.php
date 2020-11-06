<?php

namespace App\Controller\Web;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class EmployeeZoneController
 * @package App\Controller\Web
 *
 * @Route(host="office.%domain%")
 */
class EmployeeZoneController extends AbstractController
{
    /**
     * @Route("/", name="web_employee_zone")
     */
    public function index(): Response
    {
        return $this->render('web/employee_zone/index.html.twig', [
            'props' => [],
        ]);
    }
}
