//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById('amigo').value;
    if (nomeDoAmigo.trim() === '') {
        alert('Por favor, insira um nome');
    } else if (amigos.includes(nomeDoAmigo)) {
        alert('Este amigo já foi adicionado!');
    } else {
        amigos.push(nomeDoAmigo);
        alert('Amigo adicionado com sucesso!');
        limparCampo();
        atualizarListaDeAmigos();
    }
}

function limparCampo() {
    document.getElementById('amigo').value = '';
}

function atualizarListaDeAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function limparLista() {
    amigos = [];
    atualizarListaDeAmigos();
    alert('Lista limpa com sucesso!');
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia!');
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = '<li>' + amigoSorteado + '</li>';
    }
}

document.querySelector('.button-add').addEventListener('click', adicionarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);