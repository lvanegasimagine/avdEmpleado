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
        { titulo: 'Listado', url: 'dashboard/prueba' },
        { titulo: 'Empleado', url: 'dashboard/empleado' },
        { titulo: 'Tabla', url: 'dashboard/tabla' }
      ]
    },
  ];
}
