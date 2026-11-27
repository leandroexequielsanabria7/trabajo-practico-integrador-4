export {};

// Interface: describe la forma de un objeto
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  telefono?: string; // propiedad opcional
  readonly creadoEn: Date; // solo lectura
}

const usuario: Usuario = {
  id: 1,
  nombre: "Leandro",
  email: "leandro@mail.com",
  creadoEn: new Date(),
};
console.log("Usuario:", usuario);

// Extender una interface
interface Docente extends Usuario {
  materia: string;
}

const docente: Docente = {
  id: 2,
  nombre: "Ana",
  email: "ana@mail.com",
  materia: "Programación",
  creadoEn: new Date(),
};
console.log("Docente:", docente.nombre, "-", docente.materia);

// Type: alias para cualquier tipo
type Id = string | number;
type Punto = { x: number; y: number };

const idProducto: Id = "P-100";
const punto: Punto = { x: 10, y: 20 };
console.log("Id:", idProducto, "Punto:", punto);

// Intersección con type (&)
type ConDireccion = { direccion: string };
type UsuarioConDireccion = Usuario & ConDireccion;

const vecino: UsuarioConDireccion = { ...usuario, direccion: "Av. 25 de Mayo 100" };
console.log("Con dirección:", vecino.direccion);

// usuario.creadoEn = new Date(); // Error: es readonly