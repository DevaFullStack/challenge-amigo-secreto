//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let ListaDeAmigos = [];

function adicionarAmigos() {
    let nomeDosAmigos = document.getElementById('amigo').value;
    if (nomeDosAmigos == '') {
        alert('Por favor, insira um nome');
    } else {
        ListaDeAmigos.push(nomeDosAmigos);
        alert('Amigo adicionado com sucesso!');
    }
}