import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcategoriesPage } from './addcategories.page';

const routes: Routes = [
  {
    path: '',
    component: AddcategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcategoriesPageRoutingModule {}
