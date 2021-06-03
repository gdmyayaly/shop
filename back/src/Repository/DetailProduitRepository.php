<?php

namespace App\Repository;

use App\Entity\DetailProduit;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DetailProduit|null find($id, $lockMode = null, $lockVersion = null)
 * @method DetailProduit|null findOneBy(array $criteria, array $orderBy = null)
 * @method DetailProduit[]    findAll()
 * @method DetailProduit[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DetailProduitRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DetailProduit::class);
    }

    // /**
    //  * @return DetailProduit[] Returns an array of DetailProduit objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DetailProduit
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
