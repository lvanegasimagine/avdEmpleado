import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadoComponent } from './empleado/empleado.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ListadoEmpleadoComponent } from './empleado/listado-empleado/listado-empleado.component';


@NgModule({
  declarations: [
    EmpleadoComponent,
    DashboardComponent,
    PagesComponent,
    ListadoEmpleadoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    EmpleadoComponent,
    DashboardComponent,
    PagesComponent
  ]
})
export class PagesModule { }
