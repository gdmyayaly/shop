import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListsouscategoriesPage } from './listsouscategories.page';

const routes: Routes = [
  {
    path: '',
    component: ListsouscategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListsouscategoriesPageRoutingModule {}
