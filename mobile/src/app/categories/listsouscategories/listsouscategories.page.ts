import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Souscategorie } from 'src/app/model/souscategorie';
import { AdminService } from 'src/app/service/admin.service';
import { CommondataService } from 'src/app/service/commondata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listsouscategories',
  templateUrl: './listsouscategories.page.html',
  styleUrls: ['./listsouscategories.page.scss'],
})
export class ListsouscategoriesPage implements OnInit {
  @Input() id: number;
  @Input() name: string;

  public Souscategorie:Souscategorie[];
  public load:boolean=false;
  constructor(public viewCtrl: ModalController,private admin:AdminService,public data:CommondataService) { }

  ngOnInit() {
    this.loadSousCat();
  }
  dismissModal(){
    this.viewCtrl.dismiss();
  }
  loadSousCat(){
    this.load=true;
    this.admin.listSousCategorie(this.id).then(
      res=>{
        this.Souscategorie=res.body;
        this.load=false;
      },
      error=>{console.log(error);
        this.load=false;
      }
    )
  }
  recherche(donner){

  }
  deleteSousCat(id){
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
        this.admin.deleteSousCategorie(id).then(
          res=>{
            console.log(res);
            this.load=false;
            this.loadSousCat();
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
