export interface Empleado {
  _id: string;
  nombre: string;
  direccion: string;
  fechaNacimiento: string;
  inss: string;
  estadoCivil: string;
  celular: string;
  cedula: string;
  email: string;
  cargo: string;
  contacto: string;
  area: Area;
  estudios: string;
  fechaInicio: string;
  hijos: Hijo[];
  laboral: Laboral[];
  referencias: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

interface Laboral {
  empresa: string;
  antiguedad: number;
  cargo: string;
}

interface Hijo {
  nombre: string;
  edad: number;
  ocupacion: string;
}

interface Area {
  _id: string;
  nombre: string;
  id: string;
}