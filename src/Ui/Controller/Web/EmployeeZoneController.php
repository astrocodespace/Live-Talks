<?php

namespace App\Ui\Controller\Web;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
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
        if (!$this->getUser()) {
            return $this->redirectToRoute('web_login');
        }


        return $this->render('web/employee_zone/index.html.twig', [
            'props' => [],
        ]);
    }
}
