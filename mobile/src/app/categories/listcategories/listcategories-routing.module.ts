import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListcategoriesPage } from './listcategories.page';

const routes: Routes = [
  {
    path: '',
    component: ListcategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListcategoriesPageRoutingModule {}
