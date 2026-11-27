export {};

// Gracias a @types/node, TypeScript conoce "process"
console.log("Versión de Node:", process.version);
console.log("Sistema operativo:", process.platform);

// Comandos del proyecto
const comandos: string[] = [
  "npm i -D typescript @types/node@24 tsx → instala las herramientas",
  "npx tsx archivo.ts → ejecuta sin verificar tipos",
  "npx tsc --noEmit → solo verifica tipos",
  "npx tsc → verifica y genera JavaScript en dist/",
];

comandos.forEach((comando) => console.log("-", comando));

// tsx y node ejecutan esto aunque el tipo esté mal; tsc lo detecta
// let edad: number = "treinta"; // Error solo en el editor y en tsc