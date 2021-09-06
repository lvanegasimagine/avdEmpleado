import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { EmpleadoService } from '../../../service/empleado.service';
import { Empleado } from '../../interfaces/empleado.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
  styleUrls: ['./listado-empleado.component.css']
})
export class ListadoEmpleadoComponent implements AfterViewInit, OnInit {

  empleadoLista: Empleado[] = [];
  displayedColumns: string[] = ['nombre','inss','celular','cargo','area','tools'];
  dataSource = new MatTableDataSource(this.empleadoLista);
  
  constructor(private empleadoService: EmpleadoService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.empleadoList()  
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  empleadoList(){
    this.empleadoService.getEmpleadoList().subscribe((resp:Empleado[]) => {
        this.empleadoLista = resp['data'];
        console.log(this.empleadoLista);
    })
  }
}
