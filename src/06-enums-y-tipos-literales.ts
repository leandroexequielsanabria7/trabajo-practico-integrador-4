export {};

// Enum: conjunto de constantes con nombre
enum EstadoPedido {
  PENDIENTE = "PENDIENTE",
  ENVIADO = "ENVIADO",
  ENTREGADO = "ENTREGADO",
}

let pedido: EstadoPedido = EstadoPedido.PENDIENTE;
console.log("Estado inicial:", pedido);
pedido = EstadoPedido.ENVIADO;
console.log("Estado actual:", pedido);

// El enum existe en ejecución: se puede recorrer
console.log("Estados posibles:", Object.values(EstadoPedido));

// Tipo literal: solo acepta esos valores exactos
type Rol = "admin" | "user" | "guest";

function mostrarPermisos(rol: Rol): string {
  if (rol === "admin") return "Acceso total";
  if (rol === "user") return "Acceso normal";
  return "Solo lectura";
}

console.log("admin →", mostrarPermisos("admin"));
console.log("guest →", mostrarPermisos("guest"));

// mostrarPermisos("superadmin"); // Error: no es un valor permitidonpx tsx src/06-enums-y-tipos-literales.ts