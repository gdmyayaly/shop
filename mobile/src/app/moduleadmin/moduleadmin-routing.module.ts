import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleadminPage } from './moduleadmin.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleadminPageRoutingModule {}
