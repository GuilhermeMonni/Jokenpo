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
let jogador = 0;  //0-jogador \ 1-computador
let jogo = true;    //status do jogo
let status_jogo = []; //jogadas
let nivel = 1 //nivel jogada cpu
let vencedor 

function click_celula(p){
    //função quando escolher uma celula
    if((jogo == true) && (jogador == 0)){
        switch(p){
            case 1:
                if(status_jogo[0][0] == ""){
                    status_jogo[0][0] = "X";
                    jogador = 1;
                }
                break;
            case 2:
                if(status_jogo[0][1] == ""){
                    status_jogo[0][1] = "X";
                }
                break;
            case 3:
                if(status_jogo[0][2] == ""){
                    status_jogo[0][2] = "X";
                }
                break;
            case 4:
                if(status_jogo[1][0] == ""){
                    status_jogo[1][0] = "X";
                }
                break;
            case 5:
                if(status_jogo[1][1] == ""){
                    status_jogo[1][1] = "X";
                }
                break;
            case 6:
                if(status_jogo[1][2] == ""){
                    status_jogo[1][2] = "X";
                }
                break;
            case 7:
                if(status_jogo[2][0] == ""){
                    status_jogo[2][0] = "X";
                }
                break;
            case 8:
                if(status_jogo[2][1] == ""){
                    status_jogo[2][1] = "X";
                }
                break;
            case 9:
                if(status_jogo[2][2] == ""){
                    status_jogo[2][2] = "X";
                }
                break;
        }
    }
    
    jogada_computador(); //chama a jogada da cpu
    atualiza_tabuleiro(); //atualiza o tabuleiro
    checar_resultado(); // checa se não tem um vencedor
}

function jogada_computador(){
    //jogada da cpu
    if((jogo == true) && (jogador = 1)){
        let c = 0;  //coluna
        let l = 0;  //linha
        if(nivel == 1){
            do{ //manda a cpu sortear um número
                c = Math.round(Math.random()*2);
                l = Math.round(Math.random()*2);
            }while(status_jogo[l][c] != "");
            status_jogo[l][c] = "O";
        }
        atualiza_tabuleiro();
        checar_resultado();
        jogador = 0;
    }
}

function checar_resultado(){    
    if((status_jogo[0][0] === "X") && (status_jogo[0][1] === "X") && (status_jogo[0][2] === "X")){
        atualiza_tabuleiro();
        vencedor = 0;
        const resultado = () => {alert("Xis venceu")};
        setTimeout(resultado, 1000);    //temporizador
    }else if((status_jogo[0][0] === "O") && (status_jogo[0][1] === "O") && (status_jogo[0][2] === "O")){
        atualiza_tabuleiro();
        vencedor = 1;
        const resultado = () => {alert("Bolinha venceu")};
        setTimeout(resultado, 1000);    //temporizador
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





