function btnVoltar(){
    //botao de voltar para pag inicial
    location.replace("index.html", "_self");   
};

function carregaPag(){
    //função quando carrega a pag
    let quadro = document.querySelector(".quadro");
    let btn_jogar = document.querySelector("#btn-jogar");

    quadro.style.display = "none";  //tabela do jogo
    btn_jogar.style.display = "none";   //botao de jogar
};

function escolhaXis(escolha){
    //botao de escolha do xis
    let btn_xis = document.querySelector("#btn-xis");   //botao do xis
    let btn_bola = document.querySelector("#btn-bola");   //botao da bolinha
    let btn_jogar = document.querySelector("#btn-jogar");   //botao de jogar
    let boa_sorte = document.querySelector("#boa-sorte");   //texto de boa sorte
    let emoji = document.querySelector("#emoji");   //emoji de animação

    btn_bola.style.background = "#ed1c23";
    btn_bola.style.color = "black";
    emoji.style.display = "none";
    boa_sorte.style.display = "initial";
    btn_jogar.style.display = "initial";
    btn_xis.style.background = "#eb0008da";
    btn_xis.style.color = "#3ADC64";
    return escolha = "x";
}

function escolhaBola(escolha){
    //botao de escolha do bola
    let btn_bola = document.querySelector("#btn-bola");   //botao da bolinha
    let btn_xis = document.querySelector("#btn-xis");   //botao do xis
    let btn_jogar = document.querySelector("#btn-jogar");   //botao de jogar
    let boa_sorte = document.querySelector("#boa-sorte");   //texto de boa sorte
    let emoji = document.querySelector("#emoji");   //emoji de animação

    btn_xis.style.background = "#ed1c23";
    btn_xis.style.color = "black";
    emoji.style.display = "none";
    boa_sorte.style.display = "initial";
    btn_jogar.style.display = "initial";
    btn_bola.style.background = "#eb0008da";
    btn_bola.style.color = "#3ADC64";
    return escolha = "o";
}