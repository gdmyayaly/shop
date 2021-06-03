import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcategoriesPageRoutingModule } from './addcategories-routing.module';

import { AddcategoriesPage } from './addcategories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddcategoriesPageRoutingModule
  ],
  declarations: [AddcategoriesPage]
})
export class AddcategoriesPageModule {}
