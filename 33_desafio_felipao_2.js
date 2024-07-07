// desafio 2️ Calculadora de partidas Rankeadas

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)


function jogador(vitorias, derrotas){
    let saldo = vitorias - derrotas

if(vitorias < 10 && vitorias > 0 ){
    console.log("O heroi tem saldo de " + saldo + " esta no nivel de Ferro")
    }else if(vitorias > 10 && vitorias <= 20){
        console.log("O heroi tem saldo de " + saldo + " esta no nivel de Bronze")
    }else if(vitorias > 20 && vitorias <= 50){
        console.log("O heroi tem saldo de " + saldo + " esta no nivel de Prata")
    }else if(vitorias > 50 && vitorias <= 80){
        console.log("O heroi tem saldo de " + saldo + " esta no nivel de Ouro")
    }else if(vitorias > 80 && vitorias <= 90){
        console.log("O heroi tem saldo de " + saldo + " esta no nivel de Diamante")
    }else if(vitorias > 90 && vitorias <= 100){
        console.log("O heroi tem saldo de " + saldo + " esta no nivel de Lendario")
    }else if(vitorias >= 101){
        console.log("O heroi tem saldo de " + saldo + " esta no nivel de Imortal")
    }else{
        console.log("ERRO, NUMERO NEGATIVO INVALIDO")
    }

}