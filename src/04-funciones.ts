export {};

// Tipos en parámetros y en el retorno
function sumar(a: number, b: number): number {
  return a + b;
}
console.log("Suma:", sumar(5, 3));

// Parámetro opcional (?)
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
console.log(saludar("Leandro"));
console.log(saludar("Leandro", "Sanabria"));

// Parámetro por defecto
function crearUsuario(nombre: string, rol: string = "user"): void {
  console.log(`Usuario ${nombre} con rol ${rol}`);
}
crearUsuario("Ana");
crearUsuario("Juan", "admin");

// Arrow function con tipos
const multiplicar = (a: number, b: number): number => a * b;
console.log("Multiplicación:", multiplicar(4, 5));

// sumar("5", 3); // Error: string no se puede asignar a number