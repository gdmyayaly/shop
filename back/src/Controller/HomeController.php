<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
    /**
     * @Route("/notif")
     */
    public function Notification()
    {
      $pushNotifications = new \Pusher\PushNotifications\PushNotifications(array(
        "instanceId" => "4cf20f8b-1c04-4781-849e-e7903094aed7",
        "secretKey" => "43E3EBD28D657A0E13B1615095112734BF7683A58C624E5FA70BF4FB01ABF250",
      ));
      $publishResponse = $pushNotifications->publishToInterests(
        ["donuts"],
        [
          "apns" => [
            "aps" => [
              "alert" => "Hello!",
            ],
          ],
          "fcm" => [
            "notification" => [
              "title" => "Hello!",
              "body" => "Hello, world!",
            ],
          ],
        ]
      );
      
      return $this->json(['Message'=>$publishResponse->publishId]);
    }
}
