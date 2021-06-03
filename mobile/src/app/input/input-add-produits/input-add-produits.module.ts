import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputAddProduitsPageRoutingModule } from './input-add-produits-routing.module';

import { InputAddProduitsPage } from './input-add-produits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputAddProduitsPageRoutingModule
  ],
  declarations: [InputAddProduitsPage]
})
export class InputAddProduitsPageModule {}
