let listaDeNumerosSorteados = [];
let limiteDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextTela (tag, texto) {
    let exibirText = document.querySelector(tag);
    exibirText.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextTela('h1', 'Jogo do número secreto');
    exibirTextTela('p', 'Escolha um número de 1 a 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextTela('h1', 'Acertou!');
        let = palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
        let = mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroSecreto){
            exibirTextTela('p', 'O número secreto é maior');
        } else {
            exibirTextTela('p','O número secreto é menor');
        }
        tentativas++;
        limparCampo();
    }


}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1)
    let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosLista == limiteDeNumeros) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


