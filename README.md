# Trabajo Práctico Integrador N° 4: Investigación en TypeScript

**Alumno:** Leandro Sanabria

## Tema 1: ¿Qué es TypeScript?

**¿Qué es TypeScript y quién lo desarrolla?**
Es un lenguaje creado por Microsoft que agrega tipos a JavaScript. Todo código JavaScript también es TypeScript válido, y antes de ejecutarse se convierte a JavaScript.

**¿Qué diferencias tiene con JavaScript?**
JavaScript muestra los errores de tipo recién al ejecutar. TypeScript los detecta mientras escribimos. Además agrega interfaces, type y enums, y necesita convertirse a JavaScript para ejecutarse.

**¿Qué ventajas ofrece?**
Encuentra errores antes de ejecutar, mejora el autocompletado del editor y hace el código más fácil de mantener.

**¿Cuál es su versión actual?**
TypeScript 7.0, lanzado en julio de 2026. Es mucho más rápido porque su compilador fue reescrito en Go.

## Tema 2: Crear y ejecutar un proyecto

**¿Cómo se instala TypeScript en un proyecto?**
Con `npm init -y` y después `npm i -D typescript @types/node@24 tsx`. Se instala de forma local, como dependencia de desarrollo.

**¿Para qué sirve el archivo tsconfig.json?**
Es la configuración del proyecto: indica qué archivos revisar, qué tan estricta es la verificación y dónde se guarda el JavaScript generado.

**¿Qué hace el comando tsc?**
Es el compilador. Revisa los tipos de todo el proyecto y genera los archivos `.js` en la carpeta `dist`.

**¿Qué diferencia hay entre ejecutar un archivo con tsc, tsx y node?**
- `tsc` revisa los tipos y genera JavaScript, pero no ejecuta.
- `tsx` ejecuta el archivo `.ts` directamente, sin revisar tipos.
- `node` también ejecuta el `.ts` borrando los tipos, pero no soporta enums.

## Tema 3: Tipos básicos

**¿Qué son los tipos string, number y boolean?**
`string` es texto, `number` son números y `boolean` es verdadero o falso.

**¿Cómo se declara un array con tipo?**
Con el tipo y corchetes: `let notas: number[] = [8, 9, 7];`

**¿Qué es un tipo unión?**
Un tipo que acepta más de una opción, separadas con `|`. Por ejemplo, `string | number`.

**¿Por qué se recomienda evitar any?**
Porque `any` apaga la revisión de tipos y se pierde la ventaja de usar TypeScript. Es mejor usar `unknown`.

## Tema 4: Funciones

**¿Cómo se indican los tipos de los parámetros?**
Con dos puntos después del nombre: `function sumar(a: number, b: number)`.

**¿Cómo se indica el tipo de retorno?**
Después de los paréntesis: `function sumar(a: number, b: number): number`. Si no devuelve nada, se usa `void`.

**¿Qué es un parámetro opcional?**
Un parámetro que se puede omitir. Se marca con `?`: `apellido?: string`.

**¿Qué es un parámetro por defecto?**
Un parámetro que ya tiene un valor si no se lo envía: `rol: string = "user"`.

## Tema 5: Interfaces y type

**¿Qué es una interfaz y para qué sirve?**
Define la forma que debe tener un objeto: qué propiedades tiene y de qué tipo son. Si falta algo, TypeScript avisa.

**¿Qué es un type?**
Un nombre que le damos a un tipo. Puede ser un objeto, una unión o un valor fijo.

**¿Cómo se declara una propiedad opcional?**
Con `?` después del nombre: `telefono?: string`.

**¿Cuándo conviene usar cada uno?**
`interface` para objetos y cuando se necesita extender con `extends`. `type` para uniones y valores fijos.

## Tema 6: Enums y tipos literales

**¿Qué es un enum?**
Un grupo de constantes con nombre, como `EstadoPedido.PENDIENTE`. Existe también cuando se ejecuta el programa.

**¿Qué es un tipo literal?**
Un tipo que solo acepta valores exactos: `type Rol = "admin" | "user"`.

**¿En qué se parecen y en qué se diferencian?**
Los dos limitan un valor a pocas opciones. La diferencia es que el enum existe al ejecutar y el tipo literal desaparece al compilar.

**¿En qué situaciones se puede usar cada uno?**
El enum, cuando se necesitan los valores en ejecución, como los estados de un pedido. El tipo literal, para opciones simples, como los roles de un usuario.

## Fuentes consultadas

- Guía de la cátedra: *Introducción a TypeScript*, Instituto Politécnico Formosa (2026).
- Documentación oficial de TypeScript: https://www.typescriptlang.org/docs/
- Blog oficial, *Announcing TypeScript 7.0*: https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/