import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PruebaComponent } from './prueba/prueba.component';

const routes: Routes = [
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'prueba', component: PruebaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
