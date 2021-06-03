<?php

namespace App\Entity;

use App\Repository\ProduitRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ProduitRepository::class)
 */
class Produit
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
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"list"})
     */
    private $detail;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"list"})
     */
    private $image;

    /**
     * @ORM\Column(type="array", nullable=true)
     * @Groups({"list"})
     */
    private $images = [];

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"list"})
     */
    private $longDetail;

    /**
     * @ORM\ManyToOne(targetEntity=Categorie::class, inversedBy="produits")
     * @Groups({"list"})
     */
    private $categorie;

    /**
     * @ORM\OneToMany(targetEntity=ProduitInformations::class, mappedBy="produits")
     * @Groups({"list"})
     */
    private $produitInformations;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $imagename;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $etat;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $prix;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $prixreduction;

    /**
     * @ORM\Column(type="boolean")
     */
    private $viewprice;

    public function __construct()
    {
        $this->produitInformations = new ArrayCollection();
        $this->etat="actif";
        $this->prix=0;
        $this->prixreduction=0;
        $this->viewprice=false;
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

    public function getDetail(): ?string
    {
        return $this->detail;
    }

    public function setDetail(?string $detail): self
    {
        $this->detail = $detail;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getImages(): ?array
    {
        return $this->images;
    }

    public function setImages(?array $images): self
    {
        $this->images = $images;

        return $this;
    }

    public function getLongDetail(): ?string
    {
        return $this->longDetail;
    }

    public function setLongDetail(?string $longDetail): self
    {
        $this->longDetail = $longDetail;

        return $this;
    }

    public function getCategorie(): ?Categorie
    {
        return $this->categorie;
    }

    public function setCategorie(?Categorie $categorie): self
    {
        $this->categorie = $categorie;

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
            $produitInformation->setProduits($this);
        }

        return $this;
    }

    public function removeProduitInformation(ProduitInformations $produitInformation): self
    {
        if ($this->produitInformations->removeElement($produitInformation)) {
            // set the owning side to null (unless already changed)
            if ($produitInformation->getProduits() === $this) {
                $produitInformation->setProduits(null);
            }
        }

        return $this;
    }

    public function getImagename(): ?string
    {
        return $this->imagename;
    }

    public function setImagename(string $imagename): self
    {
        $this->imagename = $imagename;

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

    public function getPrix(): ?int
    {
        return $this->prix;
    }

    public function setPrix(?int $prix): self
    {
        $this->prix = $prix;

        return $this;
    }

    public function getPrixreduction(): ?int
    {
        return $this->prixreduction;
    }

    public function setPrixreduction(?int $prixreduction): self
    {
        $this->prixreduction = $prixreduction;

        return $this;
    }

    public function getViewprice(): ?bool
    {
        return $this->viewprice;
    }

    public function setViewprice(bool $viewprice): self
    {
        $this->viewprice = $viewprice;

        return $this;
    }
}
