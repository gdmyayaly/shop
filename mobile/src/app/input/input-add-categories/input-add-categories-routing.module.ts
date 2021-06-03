import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputAddCategoriesPage } from './input-add-categories.page';

const routes: Routes = [
  {
    path: '',
    component: InputAddCategoriesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputAddCategoriesPageRoutingModule {}
