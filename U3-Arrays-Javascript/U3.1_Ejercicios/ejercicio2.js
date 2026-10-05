let paises = ["España", "Francia", "Alemania", "Italia"];

// Recorremos y mostramos todos
for (let i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}

// Borramos el primero
delete paises[0];

// Volvemos a recorrerlo
for (let i = 0; i < paises.length; i++) {
    console.log(paises[i]);
}