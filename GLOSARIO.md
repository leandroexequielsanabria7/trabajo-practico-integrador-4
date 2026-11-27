# Glosario de TypeScript

## 1. TypeScript
Lenguaje creado por Microsoft que agrega tipos a JavaScript.

```ts
let lenguaje: string = "TypeScript";
```

## 2. Tipo
Indica qué clase de valor puede guardar una variable.

```ts
let edad: number = 25;
```

## 3. Inferencia de tipos
TypeScript deduce el tipo solo, a partir del valor inicial.

```ts
let ciudad = "Formosa"; // TypeScript sabe que es string
```

## 4. Array con tipo
Lista donde todos los elementos son del mismo tipo.

```ts
let notas: number[] = [8, 9, 7];
```

## 5. Tupla
Array con una cantidad fija de elementos y un tipo para cada posición.

```ts
let alumno: [string, number] = ["Ana", 22];
```

## 6. Tipo unión
Tipo que acepta más de una opción.

```ts
let id: string | number = "ABC123";
```

## 7. any
Tipo que acepta cualquier valor y desactiva la revisión de tipos.

```ts
let dato: any = "texto";
dato = 42;
```

## 8. unknown
Acepta cualquier valor, pero obliga a verificar el tipo antes de usarlo.

```ts
let valor: unknown = "hola";
if (typeof valor === "string") {
  console.log(valor.toUpperCase());
}
```

## 9. Parámetro opcional
Parámetro que se puede omitir al llamar a la función.

```ts
function saludar(nombre: string, apellido?: string): string {
  return apellido ? `Hola ${nombre} ${apellido}` : `Hola ${nombre}`;
}
```

## 10. Parámetro por defecto
Parámetro que toma un valor si no se lo envía.

```ts
function crearUsuario(nombre: string, rol: string = "user"): void {
  console.log(nombre, rol);
}
```

## 11. void
Indica que una función no devuelve ningún valor.

```ts
function mostrar(mensaje: string): void {
  console.log(mensaje);
}
```

## 12. Interface
Define la forma que debe tener un objeto.

```ts
interface Usuario {
  nombre: string;
  email: string;
}
```

## 13. type
Le da un nombre a un tipo.

```ts
type Id = string | number;
```

## 14. Enum
Grupo de constantes con nombre.

```ts
enum Estado {
  PENDIENTE = "PENDIENTE",
  ENVIADO = "ENVIADO",
}
```

## 15. Tipo literal
Tipo que solo acepta valores exactos.

```ts
type Rol = "admin" | "user";
```

## 16. tsconfig.json
Archivo de configuración del proyecto TypeScript.

```json
{
  "compilerOptions": { "strict": true },
  "include": ["src"]
}
```