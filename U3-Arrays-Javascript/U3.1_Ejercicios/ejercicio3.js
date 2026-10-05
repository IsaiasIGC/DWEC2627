let nombres = ["Isaías", "Joel", "Diego", "Ariel", "Sergio"];
let edades = [18, 21, 15, 21, 16];

let mayoresDeEdad = [];

// Recorremos y comprobamos si son mayores de edad
for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
        mayoresDeEdad.push(nombres[i]);
    }
}

// Mostramos el array con los mayores de edad
console.log(mayoresDeEdad);