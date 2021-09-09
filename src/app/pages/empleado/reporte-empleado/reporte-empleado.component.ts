import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmpleadoService } from '../../../service/empleado.service';
import { Empleado } from '../../interfaces/empleado.interface';
@Component({
  selector: 'app-reporte-empleado',
  templateUrl: './reporte-empleado.component.html',
  styleUrls: ['./reporte-empleado.component.css']
})
export class ReporteEmpleadoComponent implements OnInit {

  id: string;
  empleado: any = {};

  constructor(private activatedRoute: ActivatedRoute, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getEmpleadoById(this.id);
  }

  getEmpleadoById(id: string){
    this.empleadoService.getEmpleadoById(id).subscribe(resp => {
      this.empleado = resp['data']
      console.log('empleado', this.empleado);
    })
  }

}
