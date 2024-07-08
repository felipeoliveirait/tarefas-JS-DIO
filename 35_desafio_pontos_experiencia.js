const readline = require('readline-sync');
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados. Lembre-se: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).
let num1 = parseInt(readline.question("Introduza o nivel do monstro: "));
let num2 = parseInt(readline.question("Introduza a dificuldade da batalha(1 a 100): "));
let resultado = (num1 * num2 )* 100;

// Imprime a quantidade de XP ganho
console.log("Voce ganhou " + resultado+ " XP!");