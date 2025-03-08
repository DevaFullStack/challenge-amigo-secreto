//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let ListaDeAmigos = [];

function adicionarAmigo() {
    let nomeDosAmigos = document.getElementById('amigo').value;
    ListaDeAmigos.push(nomeDosAmigos);
    console.log(ListaDeAmigos);
}