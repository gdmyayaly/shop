import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Produits } from 'src/app/model/produits';
import { AdminService } from 'src/app/service/admin.service';
import { CommondataService } from 'src/app/service/commondata.service';
import Swal from 'sweetalert2';

import { AddproduitsPage } from '../addproduits/addproduits.page';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.page.html',
  styleUrls: ['./listproduits.page.scss'],
})
export class ListproduitsPage implements OnInit {
  public load:boolean=false;
  public Produits:Produits[];
  constructor(public modalController: ModalController,private admin:AdminService,public commonData:CommondataService) { }

  ngOnInit() {
    this.loadProduits();
  }
  async addProduits() {
    const modal = await this.modalController.create({
      component: AddproduitsPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,

    });
    modal.onDidDismiss().then(data => {
      this.loadProduits();})
    return await modal.present();
  }
  loadProduits(){
    this.load=true;
    this.admin.listProduits().then(
      res=>{this.Produits=res.body;
        this.load=false;
      },
      error=>{console.log(error);
        this.load=false;
      }
    )
  }
  // deleteProd(id){
  //   this.load=true;
  //   this.admin.deleteProduits(id).then(
  //     res=>{
  //       console.log(res);
  //       this.load=false;
  //     },
  //     error=>{
  //       console.log(error);
  //       this.load=false;
  //     }
  //   )
  // }
  deleteProd(id){
    Swal.fire({
      title: 'Voulez vous supprimer cette Catégorie',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Supprimer`,
      denyButtonText: `Ne Pas Supprimer`,
      cancelButtonText:`Annuler`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.load=true;
        this.admin.deleteProduits(id).then(
          res=>{
            console.log(res);
            this.load=false;
            this.loadProduits();
            Swal.fire('Bravo!', '', 'success')

          },
          error=>{
            console.log(error);
            this.load=false;
          }
        )
      } 
    })

  }
}
