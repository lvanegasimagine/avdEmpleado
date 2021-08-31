import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  formEmpleado: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initFormulario();
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
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      direccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      fechaNacimiento: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      inss: ['', [Validators.minLength(5), Validators.maxLength(8)]],
      estadoCivil: ['', [Validators.required]],
      celular: ['', [Validators.required, Validators.maxLength(8)]],
      cedula: ['', [Validators.required, Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]],
      contacto: ['', [Validators.required, Validators.maxLength(100)]],
      area: ['', [Validators.required, Validators.maxLength(100)]],
      cargo: ['', [Validators.required, Validators.maxLength(100)]],
      estudios: ['', [Validators.required, Validators.maxLength(100)]],
      fechaInicio: ['', [Validators.required, Validators.maxLength(100)]],
      laboral: this.fb.array([this.createLaboral()],Validators.required),
      referencia: this.fb.array([this.createReferencia()], Validators.required),
      hijos: this.fb.array([this.createHijos()])
    });
  }

  guardar(){
    console.log(this.formEmpleado.value);
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

}
