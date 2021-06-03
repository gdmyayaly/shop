<?php

namespace App\Controller;

use App\Entity\Produit;
use App\Entity\Whatsapp;
use App\Entity\Categorie;
use App\Entity\DetailProduit;
use App\Entity\SousCategorie;
use App\Entity\ProduitInformations;
use App\Repository\WhatsappRepository;
use App\Repository\CategorieRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\DetailProduitRepository;
use App\Repository\ProduitRepository;
use App\Repository\SousCategorieRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
     * @Route("/api", name="administration")
     */
class AdministrationController extends AbstractController
{
    /**
     * @Route("/categories/add" , methods={"POST"})
     */
    public function addCategorie(Request $request,EntityManagerInterface $entityManagerInterface){
        $data = json_decode($request->getContent(),true);
        $requestFile=$request->files->all();
        if(!$data){
            $data=$request->request->all();
        }
        $categorie= new Categorie();
        $image=null;
        if ($requestFile) {
            $sfile = $requestFile["image"];
            //$originalFilename = pathinfo($sfile->getClientOriginalName(), PATHINFO_FILENAME);
            $image=$this->saveimage($sfile);  
            $categorie->setImagename($data["imagename"]);      
        }
        $categorie->setNom($data["nom"])
                  ->setDetail($data["detail"])
                  ->setImage($image);
        $entityManagerInterface->persist($categorie);
        $entityManagerInterface->flush();
        return new JsonResponse(['status' => 'Categorie created!'], Response::HTTP_CREATED);    
    }
    /**
     * @Route("/categories/list" , methods={"GET"})
     */
    public function listCategorie(SerializerInterface $serializer,CategorieRepository $categorieRepository){
        $phone = $categorieRepository->findBy(['etat'=>'actif']);
        $data = $serializer->serialize($phone, 'json', [
            'groups' => ['list']
        ]);
        return new Response($data, 200, [
            'Content-Type' => 'application/json'
        ]);
    }
    /**
     * @Route("/categories/delete/{id}" , methods={"DELETE"})
     */
    public function deleteCategorie($id,CategorieRepository $categorieRepository,EntityManagerInterface $entityManagerInterface){
        $categorie=$categorieRepository->find($id);
        $categorie->setEtat("passif");
        $entityManagerInterface->persist($categorie);
        $entityManagerInterface->flush();
        return new JsonResponse(['status' => "Categorie deleted"], Response::HTTP_NO_CONTENT);
    }
    /**
     * @Route("/souscategories/add" , methods={"POST"})
     */
    public function addSousCategorie(Request $request,EntityManagerInterface $entityManagerInterface,CategorieRepository $categorieRepository){
        $data = json_decode($request->getContent(),true);
        $requestFile=$request->files->all();
        if(!$data){
            $data=$request->request->all();
        }
        $image=null;
        $categorie=$categorieRepository->find($data["categorie"]);
        $sousCategorie= new SousCategorie();
        if ($requestFile) {
            $sfile = $requestFile["image"];
            $image=$this->saveimage($sfile);  
            //$originalFilename = pathinfo($sfile->getClientOriginalName(), PATHINFO_FILENAME);    
            $sousCategorie->setImagename($data["imagename"]);      
        }
        $sousCategorie->setNom($data["nom"])
                      ->setDetail($data["detail"])
                      ->setCategorie($categorie)
                      ->setImage($image);
        $entityManagerInterface->persist($sousCategorie);
        $entityManagerInterface->flush();
        return new JsonResponse(['status' => 'Sous Categorie created!'], Response::HTTP_CREATED); 
    }
    /**
     * @Route("/souscategories/list/{id}" , methods={"GET"})
     */
    public function listSousCategorie($id,SerializerInterface $serializer,SousCategorieRepository $categorieRepository){
        $sousCategorie = $categorieRepository->findBy(['categorie'=>$id,'etat'=>'actif']);
        $data = $serializer->serialize($sousCategorie, 'json', [
            'groups' => ['list']
        ]);
        return new Response($data, 200, [
            'Content-Type' => 'application/json'
        ]);
    }
        /**
     * @Route("/souscategories/delete/{id}" , methods={"DELETE"})
     */
    public function deleteSousCategorie($id,SousCategorieRepository $SouscategorieRepository,EntityManagerInterface $entityManagerInterface){
        $Souscategorie=$SouscategorieRepository->find($id);
        $Souscategorie->setEtat("passif");
        $entityManagerInterface->persist($Souscategorie);
        $entityManagerInterface->flush();
        return new JsonResponse(['status' => "Categorie deleted"], Response::HTTP_NO_CONTENT);
    }
    /**
     * @Route("/detailproduit/add" , methods={"POST"})
     */
    public function detailproduitAdd(Request $request,EntityManagerInterface $entityManagerInterface){
        $data = json_decode($request->getContent(),true);
        if(!$data){
            $data=$request->request->all();
        }
        $detailProduits= new DetailProduit();
        $detailProduits->setNom($data["nom"])
                       ->setType($data["type"]);
        if ($data["type"]=="multiple") {
            $tab=[];
            $taile=(int)$data["taille"];
            for ($i=0; $i < $taile; $i++) { 
                array_push($tab,$data["valeur$i"]);
            }
            $detailProduits->setValeur($tab);
        }
        $entityManagerInterface->persist($detailProduits);
        $entityManagerInterface->flush();
        return new JsonResponse(['status' => 'Categorie created!'], Response::HTTP_CREATED);    
    }
    /**
     * @Route("/detailproduit/list" , methods={"GET"})
     */
    public function detailproduitList(SerializerInterface $serializer,DetailProduitRepository $detailProduitRepository){
        $detailProduits = $detailProduitRepository->findBy(['etat'=>'actif']);
        $data = $serializer->serialize($detailProduits, 'json', [
            'groups' => ['list']
        ]);
        return new Response($data, 200, [
            'Content-Type' => 'application/json'
        ]);
    }
    /**
     * @Route("/detailproduit/delete/{id}" , methods={"DELETE"})
     */
    public function deleteDetailProduits($id,DetailProduitRepository $detailProduitRepository,EntityManagerInterface $entityManagerInterface){
        $detailProduits=$detailProduitRepository->find($id);
        $detailProduits->setEtat("passif");
        $entityManagerInterface->persist($detailProduits);
        $entityManagerInterface->flush();
        return new JsonResponse(['status' => "Categorie deleted"], Response::HTTP_NO_CONTENT);
    }
    /**
     * @Route("/user", methods={"GET"})
     */
    public function userConnecter(SerializerInterface $serializer){
        $user=$this->getUser();
        $data = $serializer->serialize($user, 'json', [
            'groups' => ['list']
        ]);
        return new Response($data, 200, [
            'Content-Type' => 'application/json'
        ]);
    }
    /**
     * @Route("/whatsapp/add" , methods={"POST"})
     */
    public function whatsappAdd(Request $request,EntityManagerInterface $entityManagerInterface,WhatsappRepository $whatsappRepository){
        $data = json_decode($request->getContent(),true);
        if(!$data){
            $data=$request->request->all();
        }
        $whats=$whatsappRepository->findAll();
        $whatsApp=null;
        if (count($whats)>=1) {
            $whatsApp=$whats[0];
        }
        else{
            $whatsApp= new Whatsapp();
        }
        $whatsApp->setNumero((int)$data["numero"])
                 ->setShopmessage($data["shopmessage"])
                 ->setCodemarchant((int)$data["codemarchant"])
                 ->setHomemessage($data["homemessage"]);
        $entityManagerInterface->persist($whatsApp);
        $entityManagerInterface->flush();
        return new JsonResponse(['status' => 'Sous Categorie created!'], Response::HTTP_CREATED); 
    }
    /**
     * @Route("/whatsapp/list", methods={"GET"})
     */
    public function whatsappList(SerializerInterface $serializer,WhatsappRepository $whatsappRepository){
        $whats=$whatsappRepository->findAll();
        if (count($whats)>=1) {
            $data = $serializer->serialize($whats[0], 'json', [
                'groups' => ['list']
            ]);
        }
        else{
            $data = $serializer->serialize($whats, 'json', [
                'groups' => ['list']
            ]);
        }

        return new Response($data, 200, [
            'Content-Type' => 'application/json'
        ]);
    }
    /**
     * @Route("/produits/add", methods={"POST"})
     */
    public function addProduits(Request $request,EntityManagerInterface $entityManagerInterface,DetailProduitRepository $detailProduitRepository,CategorieRepository $categorieRepository){
        $data = json_decode($request->getContent(),true);
        $requestFile=$request->files->all();
        if(!$data){
            $data=$request->request->all();
        }
        $categorie=$categorieRepository->find($data["categorie"]);
        $produits= new Produit();
        $produits->setNom($data["nom"])
                 ->setDetail($data["detail"])
                 ->setLongDetail($data["detail"])
                 ->setCategorie($categorie)
                 ->setImagename($data["imagename"]);
        if ($requestFile) {
        $sfile = $requestFile["image"];
        $image=$this->saveimage($sfile);  
        $produits->setImage($image);
                }
        // if ($data["nbrimage"]) {
        //     $tab=[];
        //     for ($i=0; $i <$data["nbrimage"] ; $i++) {
        //         $file = $requestFile["images$i"]; 
        //         $imagess=$this->saveimage($file);
        //         array_push($tab,$imagess);
        //     }
        //     $produits->setImages($tab);
        // }
        $entityManagerInterface->persist($produits);
        // $detail=$detailProduitRepository->findBy(['etat'=>'actif']);
        // for ($i=0; $i <count($detail) ; $i++) { 
        //     $linkProduits= new ProduitInformations();
        //     $slug=$detail[$i]->getNom();
        //     $slug=strtolower($slug);
        //     $slug = str_replace(' ', '', $slug);
        //     $linkProduits->setProduits($produits)
        //                  ->setDetail($detail[$i])
        //                  ->setValeur($data[$slug]);
        // $entityManagerInterface->persist($linkProduits);
        // }
        $entityManagerInterface->flush();
        return new JsonResponse(['status' => 'Sous Produits created!'], Response::HTTP_CREATED); 
    }
        /**
     * @Route("/produits/list" , methods={"GET"})
     */
    public function listProduits(SerializerInterface $serializer,ProduitRepository $produitRepository){
        $phone = $produitRepository->findBy(['etat'=>'actif']);
        $data = $serializer->serialize($phone, 'json', [
            'groups' => ['list']
        ]);
        return new Response($data, 200, [
            'Content-Type' => 'application/json'
        ]);
    }
    /**
     * @Route("/produits/delete/{id}" , methods={"DELETE"})
     */
    public function deleteProduits($id,ProduitRepository $produitRepository,EntityManagerInterface $entityManagerInterface){
        //return $this->json(['message'=>$id]);
        $produit=$produitRepository->find($id);
        $produit->setEtat("passif");
        $entityManagerInterface->persist($produit);
        $entityManagerInterface->flush();
        return new JsonResponse(['status' => "produit deleted"], Response::HTTP_NO_CONTENT);
    }
    /**
     * @Route("/produits/deletevaldetailproduits/{id}/{val}" , methods={"DELETE"})
     */
    public function deletevaldetailproduits($id,$val,EntityManagerInterface $entityManagerInterface,DetailProduitRepository $detailProduitRepository){
        $detail=$detailProduitRepository->find($id);
        $key = array_search($val, $detail->getValeur());
        $tab=$detail->getValeur();
        array_splice($tab, $key, 1);
        $detail->setValeur($tab);
        $entityManagerInterface->persist($detail);
        $entityManagerInterface->flush(); 
        return new JsonResponse(['status' => "detail produit value deleted"], Response::HTTP_NO_CONTENT);
    }
    public function saveimage($file){
        $fileName = md5(uniqid()) . '.' . $file->guessExtension();
        $file->move($this->getParameter('chemin'), $fileName);
        return $fileName;
    }
}
