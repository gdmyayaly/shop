<?php

namespace App\Repository;

use App\Entity\ProduitInformations;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ProduitInformations|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProduitInformations|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProduitInformations[]    findAll()
 * @method ProduitInformations[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProduitInformationsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ProduitInformations::class);
    }

    // /**
    //  * @return ProduitInformations[] Returns an array of ProduitInformations objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ProduitInformations
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
