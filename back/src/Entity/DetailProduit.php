<?php

namespace App\Entity;

use App\Repository\DetailProduitRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=DetailProduitRepository::class)
 */
class DetailProduit
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"list"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"list"})
     */
    private $nom;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"list"})
     */
    private $type;

    /**
     * @ORM\Column(type="array", nullable=true)
     * @Groups({"list"})
     */
    private $valeur = [];

    /**
     * @ORM\Column(type="datetime")
     */
    private $CreatedAt;

    /**
     * @ORM\OneToMany(targetEntity=ProduitInformations::class, mappedBy="detail")
     */
    private $produitInformations;
            /**
     * @ORM\Column(type="string", length=255)
     */
    private $etat;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $unite;
    public function __construct()
    {
        $this->CreatedAt=new DateTime('now');
        $this->valeur=[];
        $this->etat="actif";
        //$this->user=$this->getUser();
        $this->produitInformations = new ArrayCollection();
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getValeur(): ?array
    {
        return $this->valeur;
    }

    public function setValeur(?array $valeur): self
    {
        $this->valeur = $valeur;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->CreatedAt;
    }

    public function setCreatedAt(\DateTimeInterface $CreatedAt): self
    {
        $this->CreatedAt = $CreatedAt;

        return $this;
    }

    /**
     * @return Collection|ProduitInformations[]
     */
    public function getProduitInformations(): Collection
    {
        return $this->produitInformations;
    }

    public function addProduitInformation(ProduitInformations $produitInformation): self
    {
        if (!$this->produitInformations->contains($produitInformation)) {
            $this->produitInformations[] = $produitInformation;
            $produitInformation->setDetail($this);
        }

        return $this;
    }

    public function removeProduitInformation(ProduitInformations $produitInformation): self
    {
        if ($this->produitInformations->removeElement($produitInformation)) {
            // set the owning side to null (unless already changed)
            if ($produitInformation->getDetail() === $this) {
                $produitInformation->setDetail(null);
            }
        }

        return $this;
    }
    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getUnite(): ?string
    {
        return $this->unite;
    }

    public function setUnite(?string $unite): self
    {
        $this->unite = $unite;

        return $this;
    }
}
