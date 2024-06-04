function btnVoltar(){
    //botao de voltar
    location.replace("index.html", "_self");
}

const status = document.querySelector(".status");
// status da partida
const btn_restart = document.querySelector("btn_restart");
// botao de restart
let tabuleiro = document.querySelector(".quadro");
// tabuleiro do jogo de jogo

let jogador = "X";  //simbolo selecionado para jogar
let jogo = true;    //status do jogo
let status_jogo = []; //jogadas

const condicoes_vencedoras = [
    //posições vencedoras
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function click_celula(p){
    //função quando escolher uma celula
    if((jogo) && (jogador === "X")){
        switch(p){
            case 1:
                if(status_jogo[0][0] == ""){
                    status_jogo[0][0] = "X";
                }
                break;
            case 2:
                if(status_jogo[0][1] == ""){
                    status_jogo[0][1] = "X"
                }
                break;
            case 3:
                if(status_jogo[0][2] == ""){
                    status_jogo[0][2] = "X"
                }
                break;
            case 4:
                if(status_jogo[1][0] == ""){
                    status_jogo[1][0] = "X"
                }
                break;
            case 5:
                if(status_jogo[1][1] == ""){
                    status_jogo[1][1] = "X"
                }
                break;
            case 6:
                if(status_jogo[1][2] == ""){
                    status_jogo[1][2] = "X"
                }
                break;
            case 7:
                if(status_jogo[2][0] == ""){
                    status_jogo[2][0] = "X"
                }
                break;
            case 8:
                if(status_jogo[2][1] == ""){
                    status_jogo[2][1] = "X"
                }
                break;
            default:
                if(status_jogo[2][2] == ""){
                    status_jogo[2][2] = "X"
                }
                break;
        }
    }

    atualiza_tabuleiro();
   // checar_resultado();
}

function checar_resultado(){
    //função para checar o resultado
    let ganhou_round = false;

    for(let i = 0; i < condicoes_vencedoras; i++){
        const [a, b, c] = condicoes_vencedoras[i];
        // nomeia como a, b, c cada condição
        if(status_jogo[a] && status_jogo[a] === status_jogo[b] && status_jogo[a] === status_jogo[c]){
            // se o status do jogo for uma condição vendedora
            ganhou_round = true;
            break;
        }
    }

    if(ganhou_round){
        //define vitoria
        alert(`O jogador ${jogador} venceu!`);
        jogo = false;
        return;
    }

    let empate_round = !status_jogo.includes("");
    //se não houver celulas vazias

    if(empate_round){
        //define empate
        alert("empate");
        jogo = false;
        return;
    }
}

function atualiza_tabuleiro(){
    //posiçoes no tabuleiro
    for(let l = 0; l < 3; l++){
        for(let c = 0; c < 3; c++){
            if(status_jogo[l][c] === "X"){
                tabuleiro[l][c].textContent = "X";
                tabuleiro[l][c].style.cursor = "default";
            }else if(status_jogo[l][c] === "O"){
                tabuleiro[l][c].textContent = "O";
                tabuleiro[l][c].style.cursor = "default";
            }else{
                tabuleiro[l][c].textContent = "";
                tabuleiro[l][c].style.cursor = "pointer";
            }
        }
    }
}

function inicia(){
    jogo = true;
    status_jogo = [
        ["", "", ""], 
        ["", "", ""], 
        ["", "", ""]
    ]; //jogadas
    tabuleiro=[
        //selecionando o tabuleiro
        [document.querySelector("#celula1"), document.querySelector("#celula2"), document.querySelector("#celula3")],
        [document.querySelector("#celula4"), document.querySelector("#celula5"), document.querySelector("#celula6")],
        [document.querySelector("#celula7"), document.querySelector("#celula8"), document.querySelector("#celula9")],
    ]
}

window.addEventListener('load', inicia);  //quando inicializar a pagina





