import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { EmpleadoService } from '../../../service/empleado.service';
import { Empleado } from '../../interfaces/empleado.interface';


@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrls: ['./listado-empleado.component.css']
})
export class ListadoEmpleadoComponent implements AfterViewInit, OnInit {

  empleadoList: any[] = [];
  displayedColumns: string[] = ['nombre','inss','celular','cargo','area','tools'];
  dataSource = new MatTableDataSource<any>(this.empleadoList);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private empleadoService: EmpleadoService) {
  }
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void {
    this.listarEmpleado();
    console.log('datasource',this.dataSource);
  }


  listarEmpleado(){
    this.empleadoService.getEmpleadoList().subscribe(resp => {
      this.dataSource.data = resp['data'];
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  
}
