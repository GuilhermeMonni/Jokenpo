function btnVoltar(){
    //botao de voltar para pag inicial
    location.replace("index.html", "_self");   
};

function carregaPagHome(){
    //função quando carrega a pag
    let btn_jogar_xis = document.querySelector("#btn-jogar-xis");
    let btn_jogar_bola = document.querySelector("#btn-jogar-bola");

    btn_jogar_xis.style.display = "none";   //botao de jogar xis
    btn_jogar_bola.style.display = "none";   //botao de jogar bola
};

function escolhaXis(){
    //botao de escolha do xis
    let btn_xis = document.querySelector("#btn-xis");   //botao do xis
    let btn_bola = document.querySelector("#btn-bola");   //botao da bolinha
    let btn_jogar_xis = document.querySelector("#btn-jogar-xis");   //botao de jogar xis
    let boa_sorte = document.querySelector("#boa-sorte");   //texto de boa sorte
    let emoji = document.querySelector("#emoji");   //emoji de animação
    let btn_jogar_bola = document.querySelector("#btn-jogar-bola");   //botao de jogar bolinha

    btn_bola.style.background = "#ed1c23";
    btn_bola.style.color = "black";
    emoji.style.display = "none";
    boa_sorte.style.display = "initial";
    btn_jogar_xis.style.display = "initial";
    btn_jogar_bola.style.display = "none";
    btn_xis.style.background = "#eb0008da";
    btn_xis.style.color = "#3ADC64";
}

function escolhaBola(){
    //botao de escolha do bola
    let btn_bola = document.querySelector("#btn-bola");   //botao da bolinha
    let btn_xis = document.querySelector("#btn-xis");   //botao do xis
    let btn_jogar_bola = document.querySelector("#btn-jogar-bola");   //botao de jogar bolinha
    let boa_sorte = document.querySelector("#boa-sorte");   //texto de boa sorte
    let emoji = document.querySelector("#emoji");   //emoji de animação
    let btn_jogar_xis = document.querySelector("#btn-jogar-xis");   //botao de jogar xis

    btn_xis.style.background = "#ed1c23";
    btn_xis.style.color = "black";
    emoji.style.display = "none";
    boa_sorte.style.display = "initial";
    btn_jogar_bola.style.display = "initial";
    btn_jogar_xis.style.display = "none";
    btn_bola.style.background = "#eb0008da";
    btn_bola.style.color = "#3ADC64";
}

function jogarXis(){
    //  jogar como xis
    location.replace("velha-x.html", "_self");
}

function jogarBola(){
    //  jogar como bolinha
    location.replace("velha-o.html", "_self");
}
