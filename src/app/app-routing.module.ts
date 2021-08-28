import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PruebaComponent } from './pages/prueba/prueba.component';

const routes: Routes = [
  // { path: 'prueba', component: PruebaComponent },
  { path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true} ),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
