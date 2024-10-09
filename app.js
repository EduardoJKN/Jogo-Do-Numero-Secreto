//let Titulo = document.querySelector ("H1")
//Titulo.innerHTML = 'Jogo do Número Secreto'

//let Paragrafo = document.querySelector ("p")
//Paragrafo.innerHTML = "Escolha um número de 1 até 10"

//O código evoluiu para isso agora >

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNúmeroAleatório ();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 até 10');
}

mensagemInicial ();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ("h1", "Parabéns");
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ("p", mensagemTentativa);
        document.getElementById ("reiniciar").removeAttribute
        ('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela ('p', 'O número secreto é maior');
        }
        tentativas++;
        LimparTentativas ();
    }
}

function gerarNúmeroAleatório () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNalista == numeroLimite) {
        listaDeNumerosSorteados = []
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNúmeroAleatório ();
    }
        
    else {
    listaDeNumerosSorteados.push (numeroEscolhido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolhido;
    }
}


function LimparTentativas() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNúmeroAleatório ();
    LimparTentativas ();
    tentativas = 1;
    mensagemInicial ();
    document.getElementById('reiniciar').setAttribute('disabled',true)
 }