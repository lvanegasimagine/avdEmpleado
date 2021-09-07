import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      encabezado: 'RRHH',
      titulo: 'Empleados',
      icono: 'fas fa-database',
      submenu: [
        { titulo: 'Listado', url: 'dashboard/listado' },
        { titulo: 'Tabla', url: 'dashboard/tabla' }
      ]
    },
  ];
}
