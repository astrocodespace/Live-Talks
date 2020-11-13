<?php

namespace App\Domain;

use App\Infrastructure\Repository\ServiceRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as JMS;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;

/**
 * @ORM\Entity(repositoryClass=ServiceRepository::class)
 * @ORM\Table(name="services")
 * @JMS\ExclusionPolicy("all")
 */
class Service
{
    /**
     * @ORM\Id
     * @ORM\Column(type="string")
     * @JMS\Expose()
     * @JMS\Groups({"service_list", "service_details"})
     */
    private $uuid;

    /**
     * @ORM\Column(type="string", length=255)
     * @JMS\Expose()
     * @JMS\Groups({"service_list", "service_details"})
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @JMS\Expose()
     * @JMS\Groups({"service_list", "service_details"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     * @JMS\Expose()
     * @JMS\Groups({"service_list", "service_details"})
     */
    private $icon;

    /**
     * @ORM\OneToMany(targetEntity=Room::class, mappedBy="service")
     * @JMS\Groups({"service_details"})
     * @JMS\Expose()
     */
    private $rooms;

    public function __construct(UuidInterface $uuid)
    {
        $this->uuid = (string) $uuid;
        $this->rooms = new ArrayCollection();
    }

    public function getUuid(): ?UuidInterface
    {
        return Uuid::fromString($this->uuid);
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getIcon(): ?string
    {
        return $this->icon;
    }

    public function setIcon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * @return Collection|Room[]
     */
    public function getRooms(): Collection
    {
        return $this->rooms;
    }

    public function addRoom(Room $room): self
    {
        if (!$this->rooms->contains($room)) {
            $this->rooms[] = $room;
            $room->addService($this);
        }

        return $this;
    }

    public function removeRoom(Room $room): self
    {
        if ($this->rooms->removeElement($room)) {
            $room->removeService($this);
        }

        return $this;
    }
}
