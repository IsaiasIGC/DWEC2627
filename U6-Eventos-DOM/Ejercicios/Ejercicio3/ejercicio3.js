function ocultarParrafo() {
    this.style.display = "none";
}

function elimnarParrafo(evento) {
    this.style.display
}

function reaparecerParrafos(params) {
    
}

let p1 = document.getElementById("parrafo1");
let p2 = document.getElementById("parrafo2");
let p3 = document.getElementById("parrafo3");

p1.addEventListener("click", ocultarParrafo);
p2.addEventListener("click", ocultarParrafo);
p3.addEventListener("click", ocultarParrafo);