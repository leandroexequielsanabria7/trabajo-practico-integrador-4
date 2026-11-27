export {};

// TypeScript = JavaScript + tipos
let lenguaje: string = "TypeScript";
let creador: string = "Microsoft";
let anioLanzamiento: number = 2012;

console.log(`${lenguaje} fue creado por ${creador} en ${anioLanzamiento}`);

// Inferencia: TypeScript deduce el tipo sin escribirlo
let mensaje = "Hola desde TypeScript"; // infiere string
console.log(mensaje.toUpperCase());

// Ventaja: detecta errores antes de ejecutar
// mensaje = 10; // Error: number no se puede asignar a string

// Todo JavaScript válido es TypeScript válido
const numeros = [1, 2, 3];
console.log("Suma:", numeros.reduce((total, n) => total + n, 0));