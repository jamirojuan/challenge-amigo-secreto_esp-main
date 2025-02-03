// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = document.getElementById("listaAmigos");
let listaSortearAmigos = [];

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
    //console.log(nombreAmigo);
    limpiarCaja();
    listaSortearAmigos.push(nombreAmigo);
    console.log(listaSortearAmigos[0]);
    console.log(listaSortearAmigos.length);
}

function limpiarCaja() {
    let caja = document.querySelector('#amigo');
    caja.focus();
    caja.select();
}

// revisa si hay amigos en la lista repetidos
function revisarAmigosRepetidos() {
    console.log(listaAmigos.getHTML);
}


// sortea un amigo
function sortearAmigo() {
    console.log(listaAmigos.querySelectorAll("li"));
    let amigos = Array.from(listaAmigos.querySelectorAll("li"));
    console.log(amigos);
    amigos.forEach(((elemento, indice) => {
        console.log(`Elemento ${indice + 1}:`, elemento.textContent);
    }))
}

//sortear numero de amigo secreto
function sortearAmigo() {
    let numeroGenerado = Math.floor(Math.random() * listaSortearAmigos.length) + 1;
    console.log(listaSortearAmigos[numeroGenerado-1]);
    return numeroGenerado;
}