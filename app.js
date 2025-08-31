// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function sortearAmigo(){
    if (amigos != "") {
        let numeroAmigo = parseInt(Math.floor(Math.random()*amigos.length));
        asignarTextoElemento("#resultado",`El amigo secreto sorteado es: ${amigos[numeroAmigo]}`);
        limpiarLista();
    }
}

function agregarAmigo(){
    if(document.getElementById("amigo").value != ""){
        document.querySelector("#amigo").setAttribute("active","true");
        let amigo = (document.getElementById("amigo").value);
        amigos.push(amigo);

        //Mostrar los datos de la lista amigos en vertical
        asignarTextoElemento("#listaAmigos",amigos);
        //llama a la funcion que convierte datos en lista html
        listaVertical(amigos);
        asignarTextoElemento("#listaAmigos",listaAmigos);
        listaAmigos = [];
        limpiarCaja();

    } else {
        alert("Por favor, inserte un nombre.");
    }
    asignarTextoElemento("#resultado","");
}

function limpiarCaja() {
    document.querySelector("#amigo").value= "";

}

function limpiarLista() {
    amigos = [];
    asignarTextoElemento("#listaAmigos",amigos);
}

function listaVertical(arreglo) {
    for (let index = 0; index < arreglo.length; index++) {
            let element = arreglo[index];
            listaAmigos.push(`<li>${element}</li>`);
    }
    //Crea una sola cadena de texto que se mostrara como cadena
    listaAmigos = listaAmigos.join("")
    listaAmigos = (`<ol>${listaAmigos}</ol>`);
}
