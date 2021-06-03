<?php

namespace App\Entity;

use App\Repository\ProduitInformationsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ProduitInformationsRepository::class)
 */
class ProduitInformations
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"list"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Produit::class, inversedBy="produitInformations")
     */
    private $produits;

    /**
     * @ORM\ManyToOne(targetEntity=DetailProduit::class, inversedBy="produitInformations")
     * @Groups({"list"})
     */
    private $detail;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $valeurInt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $valeurString;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $valeutTab = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduits(): ?Produit
    {
        return $this->produits;
    }

    public function setProduits(?Produit $produits): self
    {
        $this->produits = $produits;

        return $this;
    }

    public function getDetail(): ?DetailProduit
    {
        return $this->detail;
    }

    public function setDetail(?DetailProduit $detail): self
    {
        $this->detail = $detail;

        return $this;
    }

    public function getValeurInt(): ?int
    {
        return $this->valeurInt;
    }

    public function setValeurInt(?int $valeurInt): self
    {
        $this->valeurInt = $valeurInt;

        return $this;
    }

    public function getValeurString(): ?string
    {
        return $this->valeurString;
    }

    public function setValeurString(?string $valeurString): self
    {
        $this->valeurString = $valeurString;

        return $this;
    }

    public function getValeutTab(): ?array
    {
        return $this->valeutTab;
    }

    public function setValeutTab(?array $valeutTab): self
    {
        $this->valeutTab = $valeutTab;

        return $this;
    }
}
