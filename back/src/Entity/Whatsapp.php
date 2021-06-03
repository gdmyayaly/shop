<?php

namespace App\Entity;

use App\Repository\WhatsappRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=WhatsappRepository::class)
 */
class Whatsapp
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"list"})
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"list"})
     */
    private $numero;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"list"})
     */
    private $homemessage;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"list"})
     */
    private $shopmessage;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"list"})
     */
    private $codemarchant;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumero(): ?int
    {
        return $this->numero;
    }

    public function setNumero(int $numero): self
    {
        $this->numero = $numero;

        return $this;
    }

    public function getHomemessage(): ?string
    {
        return $this->homemessage;
    }

    public function setHomemessage(string $homemessage): self
    {
        $this->homemessage = $homemessage;

        return $this;
    }

    public function getShopmessage(): ?string
    {
        return $this->shopmessage;
    }

    public function setShopmessage(string $shopmessage): self
    {
        $this->shopmessage = $shopmessage;

        return $this;
    }

    public function getCodemarchant(): ?int
    {
        return $this->codemarchant;
    }

    public function setCodemarchant(int $codemarchant): self
    {
        $this->codemarchant = $codemarchant;

        return $this;
    }
}
