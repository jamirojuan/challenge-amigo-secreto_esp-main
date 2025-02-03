/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la
lógica para resolver el problema.*/
/* Se crean dos listas vacias, una para mostrar elementos HTML y otra para guardar los nombres de los amigos.*/

let listaAmigos = document.getElementById("listaAmigos");
let listaSortearAmigos = [];

// agrega html a cuaquier elemento 
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector("#"+elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//key enter en input
document.getElementById("amigo").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
    
});

// agrega elementos a la lista, comprueba que la lista no está vacia y llama a la funcion revisarAmigosRepetidos
function agregarAmigo() {
    // si la lista está vacía, se debe borrar el contenido del resultado, ya que eso implica que se inicia un nuevo sorteo
    asignarTextoElemento('resultado', '');
    //este es el elemento html del input
    let amigo = document.getElementById("amigo");
    //aquí se limpia el nombre del amigo en caso de tener espacios de más
    let amigoLimpio = amigo.value.replace(/\s\s+/g, " ").trim();
    console.log(amigoLimpio + " amigoLimpio");
    //si el nombre del amigo está vacío o si el amigo ya está en la lista, se muestra un alert
    if (amigoLimpio === "" || revisarAmigosRepetidos(amigoLimpio) === true) {
        console.log(amigo.value);
        alert("Debe ingresar un nombre o está repetido");
        return;
    }
    //si el nombre del amigo no está vacío, se agrega a la lista de amigos
    let nombreAmigo = amigoLimpio;
    console.log(nombreAmigo);
    //se crea un elemento li como html
    let item = document.createElement("li");
    //se le agrega el nombre del amigo al elemento li
    item.appendChild(document.createTextNode(nombreAmigo));
    //se agrega el elemento li a la lista de amigos html
    listaAmigos.appendChild(item);
    // se limpia la caja de texto
    limpiarCaja();
    //se agrega el nombre del amigo a la lista de amigos para la lógica del sorteo
    listaSortearAmigos.push(nombreAmigo);
    console.log(listaSortearAmigos[0]);
    console.log(listaSortearAmigos.length);
}



function limpiarCaja() {
    let caja = document.querySelector('#amigo');
    caja.focus();
    caja.select();
    caja.value = '';
}

// revisa si hay amigos en la lista repetidos
function revisarAmigosRepetidos(nombreAmigo) {
    if(listaSortearAmigos.includes(nombreAmigo)) {
        console.log(nombreAmigo);
        console.log(listaSortearAmigos.includes(nombreAmigo) + "repetido");
        return true;
} else { 
    console.log(nombreAmigo);
    console.log(listaSortearAmigos.includes(nombreAmigo) + "nuevo");
    return false; 
}
}

//sortear numero de amigo secreto
function sortearAmigo() {
    if(listaSortearAmigos.length === 0) {
        alert("No hay amigos en la lista")
    }
    else {
        let numeroGenerado = Math.floor(Math.random() * listaSortearAmigos.length) + 1;
        console.log(listaSortearAmigos[numeroGenerado-1]);
        //alert(`El amigo secreto es: ${listaSortearAmigos[numeroGenerado-1]}`);
        asignarTextoElemento('resultado',`El amigo secreto es: ${listaSortearAmigos[numeroGenerado-1]}`);
        listaAmigos.innerHTML = "";
        listaSortearAmigos = [];
        return numeroGenerado;
    };
}
