import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadesPage } from './unidades.page';

const routes: Routes = [
  {
    path: '',
    component: UnidadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnidadesPageRoutingModule {}
