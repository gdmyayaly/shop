import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Categorie } from 'src/app/model/categorie';
import { AdminService } from 'src/app/service/admin.service';
import { CommondataService } from 'src/app/service/commondata.service';
import Swal from 'sweetalert2';
import { AddcategoriesPage } from '../addcategories/addcategories.page';
import { ListsouscategoriesPage } from '../listsouscategories/listsouscategories.page';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.page.html',
  styleUrls: ['./listcategories.page.scss'],
})
export class ListcategoriesPage implements OnInit {
  public load:boolean=false;
  public Categorie:Categorie[];
  constructor(public modalController: ModalController,private admin:AdminService,public data:CommondataService) { }

  ngOnInit() {
    this.loadData();
  }
  async addCategorie() {
    const modal = await this.modalController.create({
      component: AddcategoriesPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        'id': null
      }
    });
    modal.onDidDismiss().then(data => {
      this.loadData();})
    return await modal.present();
  }
  loadData(){
    this.load=true;
    this.admin.listCategorie().then(
      res=>{
        this.Categorie=res.body;
        this.Categorie.reverse();
        console.log(this.Categorie);
        
        this.load=false;
      },
      error=>{console.log(error);
        this.load=false;
      }
    )
  }
  deleteCat(id){
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
        this.admin.deleteCategorie(id).then(
          res=>{
            console.log(res);
            this.load=false;
            this.loadData();
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
  recherche(a){
    console.log(a);
  }
  async addSousCategorie(id){
    const modal = await this.modalController.create({
      component: AddcategoriesPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        'id': id
      }
    });
    modal.onDidDismiss().then(data => {
      this.loadData();})
    return await modal.present();
  }
  async showSousCat(id,name){
    const modal = await this.modalController.create({
      component: ListsouscategoriesPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      componentProps: {
        'id': id,
        'name':name
      }
    });
    modal.onDidDismiss().then(data => {
      this.loadData();})
    return await modal.present();
  }
}
