import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoService } from '../../service/empleado.service';
import { CategoriaArea } from '../interfaces/categoriaArea.interface';
import { Empleado } from '../interfaces/empleado.interface';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  formEmpleado: FormGroup;
  empleadoList: Empleado[] = [];
  categoriaArea: CategoriaArea[] = [];
  nivelAcademico: string[] = ['Bachiller','Universitario','Egresado','Posgrado','Doctorado'];
  esEditable = false;

  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.initFormulario();
    this.getEmpleados();
    this.getCategoriaArea();
  }

  createLaboral():FormGroup{

    return this.fb.group({
      empresa: ['', [Validators.required, Validators.minLength(5) ]],
      antiguedad: ['', [Validators.required, Validators.minLength(5) ]],
      cargo: ['', [Validators.required, Validators.minLength(5) ]],
    })
  }

  createReferencia(): FormGroup{
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5) ]],
      apellido: ['', [Validators.required, Validators.minLength(5) ]],
      celular: ['', [Validators.required, Validators.minLength(5) ]],
    })
  }

  createHijos(): FormGroup{
    return this.fb.group({
      nombre: ['', Validators.minLength(5)],
      edad: ['', Validators.maxLength(3)],
      ocupacion: ['', Validators.minLength(5)],
    })
  }

  private initFormulario(){
    this.formEmpleado = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(100)]],
      direccion: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(250)]],
      fechaNacimiento: ['', [Validators.required]],
      inss: ['', [Validators.minLength(8), Validators.maxLength(8)]],
      estadoCivil: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.maxLength(8)]],
      cedula: ['', [Validators.required, Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.pattern(/^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/), Validators.maxLength(50)]],
      contacto: ['', [Validators.required, Validators.maxLength(100)]],
      area: ['', [Validators.required, Validators.maxLength(100)]],
      cargo: ['', [Validators.required, Validators.maxLength(25)]],
      estudios: ['', [Validators.required, Validators.maxLength(100)]],
      fechaInicio: ['', [Validators.required, Validators.maxLength(100)]],
      laboral: this.fb.array([this.createLaboral()],Validators.required),
      referencia: this.fb.array([this.createReferencia()], Validators.required),
      hijos: this.fb.array([this.createHijos()])
    });
  }

  getEmpleados(){
    this.empleadoService.getEmpleadoList().subscribe((resp: any) => {
      this.empleadoList = resp.data
    })
  }

  guardar(){
    console.log(this.formEmpleado.value);
    this.empleadoService.postEmpleado(this.formEmpleado.value).then(resp => {
      console.log('Empleado Guardado');
      this.router.navigateByUrl('/');
    }).catch((error: any) => {
      
    })
  }
  
  // TODO: fb Laboral
  agregarLaboral(){
    this.laboral.push(this.createLaboral());
  }
  
  borrarLaboral(i: number){
    this.laboral.removeAt(i);
  }
  
  //TODO: fb referencia
  
  agregarReferencia(){
    this.referencia.push(this.createReferencia());
  }
  
  borrarReferencia(i: number){
    this.referencia.removeAt(i);
  }
  
  //TODO: fb Hijos
  
  agregarHijos(){
    this.hijos.push(this.createHijos());
  }
  
  borrarHijos(i: number){
    this.hijos.removeAt(i);
  }
  
  get laboral(){
    return this.formEmpleado.get('laboral') as FormArray;
  }
  
  get referencia(){
    return this.formEmpleado.get('referencia') as FormArray;
  }
  
  get hijos(){
    return this.formEmpleado.get('hijos') as FormArray;
  }
  
  get nombreValido(){
    return this.formEmpleado.get('nombre').valid;
  }
  
  get nombreNoValido(){
    return this.formEmpleado.get('nombre').invalid && this.formEmpleado.get('nombre').touched;
  }
  
  get direccionValido(){
    return this.formEmpleado.get('direccion').valid;
  }
  
  get direccionNoValido(){
    return this.formEmpleado.get('direccion').invalid && this.formEmpleado.get('direccion').touched
  }

  get fechaNacimientoValido(){
    return this.formEmpleado.get('fechaNacimiento').valid;
  }

  get fechaNacimientoNoValido(){
    return this.formEmpleado.get('fechaNacimiento').invalid && this.formEmpleado.get('fechaNacimiento').touched;
  }

  get cedulaValido(){
    return this.formEmpleado.get('cedula').valid;
  }

  get cedulaNoValido(){
    return this.formEmpleado.get('cedula').invalid && this.formEmpleado.get('cedula').touched;
  }

  get estadoCivilValido(){
    return this.formEmpleado.get('estadoCivil').valid;
  }

  get estadoCivilNoValido(){
    return this.formEmpleado.get('estadoCivil').invalid && this.formEmpleado.get('estadoCivil').touched;
  }

  get celularValido(){
    return this.formEmpleado.get('celular').valid;
  }

  get celularNoValido(){
    return this.formEmpleado.get('celular').invalid && this.formEmpleado.get('celular').touched;
  }

  get emailValido(){
    return this.formEmpleado.get('email').valid;
  }

  get emailNoValido(){
    return this.formEmpleado.get('email').invalid && this.formEmpleado.get('email').touched;
  }

  get contactoValido(){
    return this.formEmpleado.get('contacto').valid;
  }

  get contactoNoValido(){
    return this.formEmpleado.get('contacto').invalid && this.formEmpleado.get('contacto').touched;
  }

  get cargoValido(){
    return this.formEmpleado.get('cargo').valid;
  }

  get cargoNoValido(){
    return this.formEmpleado.get('cargo').invalid && this.formEmpleado.get('cargo').touched;
  }

  getCategoriaArea(){
    this.empleadoService.getCategoriaAreaList().subscribe((resp: CategoriaArea[]) => {
        this.categoriaArea = resp['data'];
    })
  }
}
