import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-formulaireadd',
  templateUrl: './formulaireadd.page.html',
  styleUrls: ['./formulaireadd.page.scss'],
})
export class FormulaireaddPage implements OnInit {

  constructor(public viewCtrl: ModalController,private admin:AdminService) { }
  public typeChamps=["text","chiffre","multiple"];
  public tabValeur=[0];
  public MultipleValeur=[];
  public load:boolean=false;
  ngOnInit() {
    console.log(this.tabValeur.length);
    
  }
  formulaire= new FormGroup({
    nom:new FormControl('',Validators.required),
    type: new FormControl('',Validators.required),
    taille:new FormControl(null),
    valeur0: new FormControl(null)
  })
  dismissModal(){
    this.viewCtrl.dismiss();
  }
  saveInput(){
    this.formulaire.get('taille').setValue(this.tabValeur.length)
    this.load=true;
    console.log(this.formulaire.value);
    this.admin.saveDetailProduits(this.formulaire.value).subscribe(
      res=>{console.log(res);
        this.load=false;
        this.dismissModal();
      },
      error=>{
        this.load=false;
        console.log(error);
      }
    )
  }
  plusValeur(){
    this.tabValeur.push(this.tabValeur.length);
    let valeur="valeur"+(this.tabValeur.length-1);
    this.formulaire.addControl(valeur ,new FormControl(''));
  }
  removeValeur(indexdelet){
    let newTab=[];
    for (let index = 0; index < this.tabValeur.length; index++) {
          if (index!=indexdelet) {
            newTab.push(this.formulaire.get('valeur'+index).value)
          }
          this.formulaire.removeControl("valeur"+index);   
    }
    for (let index = 0; index < newTab.length; index++) {
      this.formulaire.addControl('valeur'+index ,new FormControl(newTab[index]));
    }
    this.tabValeur.pop();
    // console.log(index);
    // console.log(this.formulaire.get('valeur'+index).value);
    
    // this.formulaire.removeControl("valeur"+index);
    // console.log(this.formulaire.value);
    // this.MultipleValeur.push(index)
    // console.log(this.tabValeur);    
    // this.tabValeur.pop();
    // console.log(this.tabValeur);
    // this.tabValeur.sort();
    // console.log(this.tabValeur);


  }
}
