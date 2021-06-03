import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListsouscategoriesPageRoutingModule } from './listsouscategories-routing.module';

import { ListsouscategoriesPage } from './listsouscategories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListsouscategoriesPageRoutingModule
  ],
  declarations: [ListsouscategoriesPage]
})
export class ListsouscategoriesPageModule {}
