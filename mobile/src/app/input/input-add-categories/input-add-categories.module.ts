import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputAddCategoriesPageRoutingModule } from './input-add-categories-routing.module';

import { InputAddCategoriesPage } from './input-add-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputAddCategoriesPageRoutingModule
  ],
  declarations: [InputAddCategoriesPage]
})
export class InputAddCategoriesPageModule {}
