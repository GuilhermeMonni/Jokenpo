function btnVoltar(){
    //botao de voltar para pag inicial
    location.replace("index.html", "_self");   
};

function carregaPag(){
    //função quando carrega a pag
    let quadro = document.querySelector(".quadro");
    let btn_jogar_xis = document.querySelector("#btn-jogar-xis");
    let btn_jogar_bola = document.querySelector("#btn-jogar-bola");

    quadro.style.display = "none";  //tabela do jogo
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
    
}

function jogarBola(){
    alert("escolheu bola");
}



/* let quadro_jogar = document.querySelector(".quadro");
    let btn_bola = document.querySelector("#btn-bola");   //botao da bolinha
    let btn_xis = document.querySelector("#btn-xis");   //botao do xis
    let btn_jogar_bola = document.querySelector("#btn-jogar-bola");   //botao de jogar bolinha
    let boa_sorte = document.querySelector("#boa-sorte");   //texto de boa sorte
    let emoji = document.querySelector("#emoji");   //emoji de animação
    let btn_jogar_xis = document.querySelector("#btn-jogar-xis");   //botao de jogar xis
    let txt_escolha = document.querySelector("#escolha-jogador");   //texto faça sua escolha
    let img_vs = document.querySelector("#img-vs")  //imagem de versus

    quadro_jogar.style.display = "grid";
    quadro_jogar.style.margin = "0px auto";
    btn_bola.style.display = "none";
    btn_xis.style.display = "none";
    btn_jogar_bola.style.display = "none";
    btn_jogar_xis.style.display = "none";
    boa_sorte.style.display = "none";
    emoji.style.display = "none";
    txt_escolha.style.display = "none";
    img_vs.style.display = "none"; */

