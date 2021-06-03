import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputCategoriesPage } from './input-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [InputCategoriesPage],
  entryComponents:[InputCategoriesPage]
})
export class InputCategoriesPageModule {}
