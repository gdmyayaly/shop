import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcategoriesPageRoutingModule } from './listcategories-routing.module';

import { ListcategoriesPage } from './listcategories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcategoriesPageRoutingModule
  ],
  declarations: [ListcategoriesPage]
})
export class ListcategoriesPageModule {}
