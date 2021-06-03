<?php

namespace App\Repository;

use App\Entity\Whatsapp;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Whatsapp|null find($id, $lockMode = null, $lockVersion = null)
 * @method Whatsapp|null findOneBy(array $criteria, array $orderBy = null)
 * @method Whatsapp[]    findAll()
 * @method Whatsapp[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WhatsappRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Whatsapp::class);
    }

    // /**
    //  * @return Whatsapp[] Returns an array of Whatsapp objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('w.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Whatsapp
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
