function btnVoltar(){
    location.replace("index.html", "_self");
};

function carregaPag(){
    let escolha = document.querySelector("#botoes-escolha");
    let quadro = document.querySelector(".quadro");

    quadro.style.display = "none";
    // escolha.style.display = "none";
}