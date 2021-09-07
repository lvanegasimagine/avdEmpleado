import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmpleadoService } from '../../../service/empleado.service';
@Component({
  selector: 'app-reporte-empleado',
  templateUrl: './reporte-empleado.component.html',
  styleUrls: ['./reporte-empleado.component.css']
})
export class ReporteEmpleadoComponent implements OnInit {

  id: string;
  constructor(private activatedRoute: ActivatedRoute, private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.getEmpleadoById(this.id);
  }

  getEmpleadoById(id: string){
    this.empleadoService.getEmpleadoById(id).subscribe(resp => {
      console.log('reporte', resp['data']);
    })
  }

}
