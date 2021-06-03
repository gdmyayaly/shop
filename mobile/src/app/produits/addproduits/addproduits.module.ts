import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddproduitsPageRoutingModule } from './addproduits-routing.module';

import { AddproduitsPage } from './addproduits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddproduitsPageRoutingModule
  ],
  declarations: [AddproduitsPage]
})
export class AddproduitsPageModule {}
