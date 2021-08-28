import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { EmpleadoComponent } from './empleado/empleado.component';
import { RouterModule } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    EmpleadoComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ],
  exports: [
    EmpleadoComponent,
    NopagefoundComponent
  ]
})
export class PagesModule { }
