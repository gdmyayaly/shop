import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InputAddProduitsPage } from '../input-add-produits/input-add-produits.page';

@Component({
  selector: 'app-input-produits',
  templateUrl: './input-produits.page.html',
  styleUrls: ['./input-produits.page.scss'],
})
export class InputProduitsPage implements OnInit {
  public items=["","","","","","",""];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async addProduitsInput() {
    const modal = await this.modalController.create({
      component: InputAddProduitsPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,

    });
    return await modal.present();
  }
}
