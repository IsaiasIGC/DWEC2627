let colores = ["rojo", "verde", "azul", "amarillo", "naranja", "violeta"];

// Creamos un array nuevo con colores en posiciones en concreto
let otrosColores = colores.slice(1, 5);

// Eliminamos 2 colores a partir de la posicion 3 e insertamos dos colores nuevos
colores.splice(3, 2, "negro", "blanco");

console.log(otrosColores);
console.log(colores);