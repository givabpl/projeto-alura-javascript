
function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        //console navegador (firefox) --> tocaSom('button') --> expandir para ver propriedades e funcionalidades. tagName: "BUTTON"  nodeName: "BUTTON"  localName: "button" (preferível utilizar o localName)
        //console.log(elemento.localName === 'audio');
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
} //funcao preparada para receber um id dinamicamente

const listaDeTeclas = document.querySelectorAll('.tecla');
//nodeList: mostra uma lista de elementos. são 9 elementos 0-8. cada elemeto, então, possui seu índice.

//será necessário acessar cada elemento da lista de forma automatizada

let contador = 0; //let = variável que sempre receberá um valor novo

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    //listaDeTeclas[contador].classList[1] --> no console, obtemos  uma lista de eventos, sendo o item 1, o que obtem o som individual da respectiva tecla.
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    //console.log(idAudio);

    tecla.onclick = function () { //função anônima
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) { //função anônima

        console.log(evento.code === 'Space');

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa'); //com essa função, ativamos os botões com as teclas espaço e enter, navegando com o tab. poém, apenas essa função sozinha, os botoes continuam ativos após pressionados.
        }
    }
    tecla.onkeyup = function () {//função anônima
        tecla.classList.remove('ativa'); //com essa função, a tecla fica branca quando solta, porém, a navegação com o tab pinta os botões de vermelho.
    }
}