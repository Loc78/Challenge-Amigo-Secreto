// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputamimo = document.getElementById("amigo");
    let nombreamigo = inputamimo.value;

    if (!nombreamigo) {
        alert("Debes ingresar un nombre");
        return;
    }
    amigos.push(nombreamigo);
    console.log(amigos);
    inputamimo.value = "";
    inputamimo.focus();
    rederizarAmigos();
}

function rederizarAmigos() {
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);

    }
}

function sortearAmigo() {
    let index = Math.floor(Math.random() * amigos.length);
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = 'El amigo sorteado es : $ {amigoSorteado}';

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}





//let amigos = ["Carlos", "Cesar", "Alejandro", "Luis", "Juan", "Pedro", "Manuel", "Javier", "Ricardo", "Roberto"];
//amigos.push("Carlos");
//amigos.push("Cesar");
//amigos.push("Alejandro");
//amigos.push("Luis");
//amigos.push("Juan");
//amigos.push("Pedro");
//amigos.push("Manuel");
//amigos.push("Javier");
//amigos.push("Ricardo");
//amigos.push("Roberto");//