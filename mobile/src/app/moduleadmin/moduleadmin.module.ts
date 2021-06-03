import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModuleadminPageRoutingModule } from './moduleadmin-routing.module';

import { ModuleadminPage } from './moduleadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModuleadminPageRoutingModule
  ],
  declarations: [ModuleadminPage]
})
export class ModuleadminPageModule {}
