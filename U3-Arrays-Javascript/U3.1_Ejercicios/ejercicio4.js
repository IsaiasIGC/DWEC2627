const palabras = ["ana", "radar", "javascript", "reconocer", "oro", "palindromo", "salas"];

let palindromos = [];

// Recorremos el array
for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let esPalindromo = true;
    
    // Recorremos la mitad de la palabra y lo comparamos con su espejo
    for (let j = 0; j < palabra.length / 2; j++) {
        if (palabra[j] != palabra[palabra.length - 1 - j]) {
            esPalindromo = false;
        }
    }

    // Si es palindromo se añade al array
    if (esPalindromo) {
        palindromos.push(palabra);
    }
}

console.log(palindromos);