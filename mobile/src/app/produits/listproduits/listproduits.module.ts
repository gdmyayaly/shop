import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListproduitsPageRoutingModule } from './listproduits-routing.module';

import { ListproduitsPage } from './listproduits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListproduitsPageRoutingModule
  ],
  declarations: [ListproduitsPage]
})
export class ListproduitsPageModule {}
