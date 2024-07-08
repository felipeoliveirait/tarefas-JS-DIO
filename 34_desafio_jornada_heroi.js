const readline = require('readline-sync');

// Leitura das entradas
const posicaoInicial = parseInt(readline.question('Introduza a posicao inicial: '));
const totalPassos = parseInt(readline.question('Introduza o total de passos: '));

// Calcule a posição final do herói
const posicaoFinal = posicaoInicial + totalPassos;

// Imprime a posição final
console.log("Posição final do herói: " + posicaoFinal);

