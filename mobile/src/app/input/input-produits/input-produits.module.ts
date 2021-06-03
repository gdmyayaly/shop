import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputProduitsPage } from './input-produits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [InputProduitsPage],
  entryComponents:[InputProduitsPage]
})
export class InputProduitsPageModule {}
