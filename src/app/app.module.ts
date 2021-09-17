import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { PagesModule } from './pages/pages.module';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
// import { LoginComponent } from './auth/login/login.component';
registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    PruebaComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
