import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ListadoEmpleadoComponent } from './empleado/listado-empleado/listado-empleado.component';
import { ReporteEmpleadoComponent } from './empleado/reporte-empleado/reporte-empleado.component';
import { PruebaComponent } from './prueba/prueba.component';

const childRoutes: Routes = [
  { path: 'listado', component: ListadoEmpleadoComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'reporte/:id', component: ReporteEmpleadoComponent},
  { path: 'main', component: DashboardComponent },
]
@NgModule({
  imports: [ RouterModule.forChild(childRoutes) ],
  exports: [ RouterModule ]
})
export class ChildRoutesModule { }
