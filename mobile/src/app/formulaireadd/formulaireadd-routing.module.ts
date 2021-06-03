import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulaireaddPage } from './formulaireadd.page';

const routes: Routes = [
  {
    path: '',
    component: FormulaireaddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulaireaddPageRoutingModule {}
