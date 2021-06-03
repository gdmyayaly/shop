import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulaireaddPageRoutingModule } from './formulaireadd-routing.module';

import { FormulaireaddPage } from './formulaireadd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormulaireaddPageRoutingModule
  ],
  declarations: [FormulaireaddPage]
})
export class FormulaireaddPageModule {}
