function btnVoltar(){
    //botao de voltar
    location.replace("index.html", "_self");
}

window.addEventListener('load', inicia);  //quando inicializar a pagina

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
let vencedor //vencedor da rodada
let verifica    //verifica vitória

function inicia(){  //quando carrega a pag
    jogador = 0;
    jogo = true;    //inicia jogo
    status_jogo = [ //zera o tabuleiro
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

function checar_resultado(){    
    // checa se não tem um vencedor
    for(l = 0; l < 3; l++){ //verifica linhas
        if((status_jogo[l][0] == status_jogo[l][1]) && (status_jogo[l][1] == status_jogo[l][2])){
            return status_jogo[l][0];
        }
    }
    for(c = 0; c < 3; c++){//verifica colunas
        if((status_jogo[0][c] == status_jogo[1][c]) && (status_jogo[1][c] == status_jogo[2][c])){
            return status_jogo[0][c];
        }
    }
    if((status_jogo[0][0] == status_jogo[1][1]) && (status_jogo[1][1] == status_jogo[2][2])){//verifica diagonal
        return status_jogo[0][0];
    }else if((status_jogo[0][2] == status_jogo[1][1]) && (status_jogo[2][0])){//verifica outra diagonal
        return status_jogo[0][2];
    }
    return "";
}

function atualiza_tabuleiro(){
    //posiçoes no tabuleiro
    for(let l = 0; l < 3; l++){ //percorre as linhas da matriz
        for(let c = 0; c < 3; c++){//percorre as colunas 
            if(status_jogo[l][c] === "X"){  //se o xis selecionar
                tabuleiro[l][c].textContent = "X";
                tabuleiro[l][c].style.cursor = "default";
            }else if(status_jogo[l][c] === "O"){ //se O selecionar
                tabuleiro[l][c].textContent = "O";
                tabuleiro[l][c].style.cursor = "default";
            }else{
                tabuleiro[l][c].textContent = "";
                tabuleiro[l][c].style.cursor = "pointer";
            }
        }
    }
}

function pos_selecionadas(){
    for(l = 0; l < 3; l++){
        for(c = 0; c < 3; c++){
            if(status_jogo[l][c] == ""){
                return jogo = true;
            }else if(status_jogo[l][c] != ""){
                return jogo = false;
            }
        }
    } 
}

function click_celula(p){
    //função quando escolher uma celula
    if((jogo) && (jogador == 0)){
        pos_selecionadas();
        switch(p){
            case 1:
                status_jogo[0][0] = "X";
                break;
            case 2:
                status_jogo[0][1] = "X";
                break;
            case 3:
                status_jogo[0][2] = "X";
                break;
            case 4:
                status_jogo[1][0] = "X";
                break;
            case 5:
                status_jogo[1][1] = "X";
                break;
            case 6:
                status_jogo[1][2] = "X";
                break;
            case 7:
                status_jogo[2][0] = "X";
                break;
            case 8:
                status_jogo[2][1] = "X";
                break;
            case 9:
                status_jogo[2][2] = "X";
                break;
        }
    }

    atualiza_tabuleiro(); //atualiza o tabuleiro
    verifica = checar_resultado(); //checa se tem um vencedor
    if(verifica == "X"){//verifica e avisa o vencedor
        alert("Parabéns você venceu!");
        jogo = false;
        inicia();
    }else if(verifica == "O"){
        alert("HAHA! Você perdeu");
        jogo = false;
        inicia();
    }
    jogada_computador(); //chama a jogada da cpu
}

function jogada_computador(){
    //jogada da cpu
    if((jogo) && (jogador = 1)){
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
        verifica = checar_resultado(); //checa se tem um vencedor
        if(verifica == "X"){//verifica e avisa o vencedor
            alert("Parabéns você venceu!");
            jogo = false;
            inicia();
        }else if(verifica == "O"){
            alert("HAHA! Você perdeu");
            jogo = false;
            inicia();
        }
    }
    jogador = 0;//chama a jogada do jogador
}
