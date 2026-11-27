export {};

// Primitivos
let nombre: string = "Leandro";
let edad: number = 25;
let estudiante: boolean = true;
console.log(nombre, edad, estudiante);

// Arrays con tipo (dos formas)
let notas: number[] = [8, 9, 7];
let materias: Array<string> = ["TLP", "Ciberseguridad"];
console.log("Notas:", notas, "Materias:", materias);

// Tupla: cantidad y tipo fijos
let alumno: [string, number] = ["Ana", 22];
console.log("Tupla:", alumno);

// Tipo unión: uno u otro tipo
let id: string | number = "ABC123";
console.log("Id texto:", id);
id = 456;
console.log("Id número:", id);

// any desactiva la verificación (evitar)
let cualquierCosa: any = "texto";
cualquierCosa = 42;
console.log("any:", cualquierCosa);

// unknown obliga a verificar antes de usar
let dato: unknown = "valor desconocido";
if (typeof dato === "string") {
  console.log("unknown verificado:", dato.toUpperCase());
}