import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { PruebaComponent } from './prueba/prueba.component';

const childRoutes: Routes = [
  { path: 'prueba', component: PruebaComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'main', component: DashboardComponent },
  { path: 'tabla', component: DatatablesComponent},
]
@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
