// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

var listaAmigos = document.getElementById("listaAmigos");

// agrega html a cuaquier elemento 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//key enter en input
document.getElementById("amigo").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

let elementoConTooltip = document.getElementById("titulo");
let tootipText = elementoConTooltip.getAttribute("title");
console.log(tootipText);

// agrega elementos a la lista
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    console.log(nombreAmigo);
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(nombreAmigo));
    listaAmigos.appendChild(item);
    console.log(nombreAmigo);
}