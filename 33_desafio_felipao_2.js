// desafio 2️ Calculadora de partidas Rankeadas

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)


// desafio 2️ Calculadora de partidas Rankeadas

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)


function calcular_rank(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    let nivel

    if (saldo < 0) {
        nivel = "ERRO, número negativo inválido";
    } else if (saldo < 10) {
        nivel = "Ferro";
    } else if (saldo <= 20) {
        nivel = "Bronze";
    } else if (saldo <= 50) {
        nivel = "Prata";
    } else if (saldo <= 80) {
        nivel = "Ouro";
    } else if (saldo <= 90) {
        nivel = "Diamante";
    } else if (saldo <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    // Exibir mensagem final
    console.log("O Herói tem saldo de " + saldo + " está no nível de " + nivel);
}

// Exemplo de uso da função
calcular_rank(80, 20); // Altere os valores de vitórias e derrotas conforme necessário
