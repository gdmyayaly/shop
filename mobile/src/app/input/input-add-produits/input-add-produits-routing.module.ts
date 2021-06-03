import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputAddProduitsPage } from './input-add-produits.page';

const routes: Routes = [
  {
    path: '',
    component: InputAddProduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputAddProduitsPageRoutingModule {}
