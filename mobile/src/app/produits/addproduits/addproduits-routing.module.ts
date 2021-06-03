import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddproduitsPage } from './addproduits.page';

const routes: Routes = [
  {
    path: '',
    component: AddproduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddproduitsPageRoutingModule {}
