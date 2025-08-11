//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
const listaDeAmigo = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

listaDeAmigo.innerHTML = '';

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome à lista.');
        return;
    }
    amigos.push(nomeAmigo);
    console.log(amigos);
    adicionarLista();
    limparCampo();
    limparResultado();
}

function adicionarLista() {
    listaDeAmigo.innerHTML = '';
    amigos.forEach(nome => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaDeAmigo.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Não há mais nomes para serem sorteados!');
        return;
    }
    const amigoNumero = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos.splice(amigoNumero, 1)[0];

    resultado.innerHTML = ''; // limpa lista resultado
    const li = document.createElement('li');
    li.textContent = `O amigo sorteado é: ${amigoSorteado}!`;
    resultado.appendChild(li);

    adicionarLista();
    console.log(amigos);
}

function limparCampo() {
    const listaNome = document.getElementById('amigo');
    listaNome.value = '';
    listaNome.focus();
}

function limparResultado() {
    resultado.innerHTML = '';
}

function reiniciarSorteio() {
    const botao = document.createElement('button');
    botao.textContent = 'Recomeçar';
    botao.addEventListener('click', () => location.reload());
    document.body.appendChild(botao);
}

reiniciarSorteio();
