import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-reporte-empleado',
  templateUrl: './reporte-empleado.component.html',
  styleUrls: ['./reporte-empleado.component.css']
})
export class ReporteEmpleadoComponent implements OnInit {

  id: string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    console.log(this.id);
  }

}
