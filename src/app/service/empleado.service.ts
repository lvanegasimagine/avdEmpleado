import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { CategoriaArea } from '../pages/interfaces/categoriaArea.interface';
import { Empleado } from '../pages/interfaces/empleado.interface';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  URL_EMPLEADO: string = `${environment.API_URL}/empleados`;
  URL_AREA: string = `${environment.API_URL}/categoria-area`;

  constructor(private http: HttpClient) { }

  getEmpleadoList(): Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.URL_EMPLEADO);
  }

  getEmpleadoById(id: string): Observable<Empleado>{
    return this.http.get<Empleado>(`${this.URL_EMPLEADO}/${id}`);
  }

  postEmpleado(data: any){
    return this.http.post(this.URL_EMPLEADO, data).toPromise();
  }

  updateEmpleado(data: any, id: string){
    return this.http.put(`${this.URL_EMPLEADO}/${id}`, data);
  }

  deleteEmpleado(id: string){
    return this.http.delete(`${this.URL_EMPLEADO}/${id}`);
  }

  getCategoriaAreaList(): Observable<CategoriaArea[]>{
    return this.http.get<CategoriaArea[]>(this.URL_AREA);
  }


}
