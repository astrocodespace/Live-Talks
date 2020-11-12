<?php

namespace App\Domain;

use App\Infrastructure\Repository\RoomRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

/**
 * @ORM\Entity(repositoryClass=RoomRepository::class)
 * @ORM\Table(name="rooms")
 * @JMS\ExclusionPolicy("all")
 */
class Room
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string")
     * @JMS\Groups({"room_list", "room_details", "service_list"})
     * @JMS\Expose()
     */
    private $uuid;

    /**
     * @ORM\ManyToMany(targetEntity=Service::class, inversedBy="rooms")
     * @ORM\JoinTable(name="services_rooms",
     *      joinColumns={@ORM\JoinColumn(name="room_uuid", referencedColumnName="uuid")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="service_uuid", referencedColumnName="uuid")}
     * )
     * @JMS\Groups({"room_details"})
     * @JMS\Expose()
     */
    private $services;

    public function __construct(UuidInterface $uuid)
    {
        $this->uuid = (string) $uuid;
        $this->services = new ArrayCollection();
    }

    public function getUuid(): ?UuidInterface
    {
        return Uuid::fromString($this->uuid);
    }

    /**
     * @return Collection|Service[]
     */
    public function getServices(): Collection
    {
        return $this->services;
    }

    public function addService(Service $service): self
    {
        if (!$this->services->contains($service)) {
            $this->services[] = $service;
        }

        return $this;
    }

    public function removeService(Service $service): self
    {
        $this->services->removeElement($service);

        return $this;
    }
}
