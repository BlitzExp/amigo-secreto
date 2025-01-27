// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo == ""){
        alert("Por favor, inserta un nombre");
    } else {
        amigos.push(amigo);
        document.getElementById('amigo').value = '';
        mostrarAmigos();
    }
}

function mostrarAmigos(){
    let listaDeAmigos = document.querySelector('#listaAmigos');
    listaDeAmigos.innerHTML = "";
    for(let x = amigos.length-1; x >= 0; x--){
        console.log("lol");
        let li = document.createElement("li");
        li.append(document.createTextNode(amigos[x]));
        listaDeAmigos.append(li);
    }
}

function sortearAmigo(){
    if(amigos.length==0){
        alert("Porfavor, introduce los nombres de los participantes");
    }else{
        let amigoSecreto = Math.floor(Math.random()*amigos.length);
        document.getElementById('resultado').innerHTML = `El amigo secreto es ${amigos[amigoSecreto]}`
        // condicionesIniciales();
    }
}

// function condicionesIniciales(){
//     amigos = [];
//     document.querySelector('#listaAmigos').innerHTML = '';   
// }