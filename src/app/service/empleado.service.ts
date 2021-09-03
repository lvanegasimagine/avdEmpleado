import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { CategoriaArea } from '../pages/interfaces/categoriaArea.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  URL_EMPLEADO: string = `${environment.API_URL}/empleados`;
  URL_AREA: string = `${environment.API_URL}/categoria-area`;

  constructor(private http: HttpClient) { }

  getEmpleadoList(){
    return this.http.get(this.URL_EMPLEADO).toPromise();
  }

  getCategoriaAreaList(){
    return this.http.get(this.URL_AREA).toPromise();
  }
}
