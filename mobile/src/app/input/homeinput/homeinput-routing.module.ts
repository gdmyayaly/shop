import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeinputPage } from './homeinput.page';

const routes: Routes = [
  {
    path: '',
    component: HomeinputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeinputPageRoutingModule {}
