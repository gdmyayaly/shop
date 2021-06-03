import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListproduitsPage } from './listproduits.page';

const routes: Routes = [
  {
    path: '',
    component: ListproduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListproduitsPageRoutingModule {}
