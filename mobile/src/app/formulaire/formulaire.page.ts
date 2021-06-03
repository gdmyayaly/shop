import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { FormulaireaddPage } from '../formulaireadd/formulaireadd.page';
import { Detailproduits } from '../model/detailproduits';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {
  public load:boolean=false;
  public DetailProduits:Detailproduits[];
  public TemDetailProduits:Detailproduits[];

  constructor(private admin:AdminService,public modalController: ModalController) { }

  ngOnInit() {
    this.loadData();
  }
  async addInput() {
    const modal = await this.modalController.create({
      component: FormulaireaddPage,
      swipeToClose: true,
    });
    modal.onDidDismiss().then(data => {
      this.loadData();})
    return await modal.present();
  }
  deleteDetailProduits(id){
    Swal.fire({
      title: 'Voulez vous supprimer ce champs de formulaire',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Supprimer`,
      denyButtonText: `Ne Pas Supprimer`,
      cancelButtonText:`Annuler`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.load=true;
        this.admin.deleteDetailProduits(id).then(
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
  recherche(donner:string){
    console.log(donner);
    if(donner==''){
      this.DetailProduits=JSON.parse(JSON.stringify(this.TemDetailProduits));
      console.log("nll");
      
    }
    else{
      let a=this.TemDetailProduits.filter(r=>{r.nom.toLowerCase().indexOf(donner.toLowerCase())});
      console.log(a);
      
      this.DetailProduits=JSON.parse(JSON.stringify(a));
    }
  }
  loadData(){
    this.load=true;
    this.admin.listDetailProduits().then(
      res=>{        
        this.DetailProduits=res.body;
        this.TemDetailProduits=JSON.parse(JSON.stringify(this.DetailProduits));
        
        this.load=false;
        console.log(res.body);
      },
      error=>{
        console.log(error);
        this.load=false;
      }
    )
  }
  deleteval(id,val,nom){
    Swal.fire({
      title: 'Voulez vous supprimer cette valeur de '+nom,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: `Supprimer`,
      denyButtonText: `Ne Pas Supprimer`,
      cancelButtonText:`Annuler`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log(id);
        console.log(val);
        this.load=true;
        this.admin.deletevaldetailproduits(id,val).then(
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
}
