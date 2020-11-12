<?php

namespace App\Domain;

use App\Infrastructure\Repository\EmployeeRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=EmployeeRepository::class)
 * @ORM\Table(name="employees")
 */
final class Employee extends User
{

}
