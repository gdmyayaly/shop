import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeinputPageRoutingModule } from './homeinput-routing.module';

import { HomeinputPage } from './homeinput.page';
import {SuperTabsModule} from '@ionic-super-tabs/angular';
import { InputCategoriesPageModule } from '../input-categories/input-categories.module';
import { InputProduitsPageModule } from '../input-produits/input-produits.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeinputPageRoutingModule,
    SuperTabsModule,
    InputCategoriesPageModule,
    InputProduitsPageModule
  ],
  declarations: [HomeinputPage]
})
export class HomeinputPageModule {}
