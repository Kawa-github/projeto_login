import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnidadesPageRoutingModule } from './unidades-routing.module';

import { UnidadesPage } from './unidades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnidadesPageRoutingModule
  ],
  declarations: [UnidadesPage]
})
export class UnidadesPageModule {}
