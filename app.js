// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let lista=""

let listaAmigos = [];

function agregarAmigo(){

    let amigos = document.getElementById("amigo");
    
    if (amigos.value.trim() === ""){
        alert("ingresa un nombre, por favor")
    }
    else{
        listaAmigos.push(amigos.value.trim());
        // Limpia el campo de entrada después de agregar el nombre
        amigos.value="" 
        console.log(listaAmigos)
        actualizarListaAmigos();
    }
}
document.getElementById("agregarAmigo").addEventListener("click",agregarAmigo) //esto dice (traeme el id de agregar amigo, luego cuando ocurra un click, ejecuta la funcion agregar amigo)
//esto funciona ya que en el index, al tener el evento onlcick con la funcion agregarAmigo, parece que no es necesario tener un id en el boton, extraño



function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista actual
    listaAmigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
document.getElementById("agregarAmigo").addEventListener("click",actualizarListaAmigos)




function obtenerGanador(){
    let amigoAlAzar = Math.floor (Math.random()*listaAmigos.length);
    return listaAmigos[amigoAlAzar];
}


function sortearAmigo(){
    if (listaAmigos.length===0){
        alert("no hay amigos pa mostrar")
    }
    let amigoSorteado = obtenerGanador(listaAmigos);
    let mostrarGanador = document.getElementById("mostrarGanador");
    mostrarGanador.textContent = "El amigo sorteado es: " + amigoSorteado;
    let borrarLista = document.getElementById("listaAmigos");
    borrarLista.innerHTML = ""
    document.getElementById("mostrarGanador").style.color = "green";
    document.getElementById("mostrarGanador").style.fontSize = "20px";

}
document.getElementById("sortearAmigoBtn").addEventListener("click", sortearAmigo);
