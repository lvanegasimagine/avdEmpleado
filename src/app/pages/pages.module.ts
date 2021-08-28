import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing';
import { EmpleadoComponent } from './empleado/empleado.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    EmpleadoComponent,
    DashboardComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    // PagesRoutingModule,
    RouterModule
  ],
  exports: [
    EmpleadoComponent,
    DashboardComponent,
    PagesComponent
    // NopagefoundComponent
  ]
})
export class PagesModule { }
