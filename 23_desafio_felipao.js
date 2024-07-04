// Desafio Classificador de nivel de heroi

// Crie uma variavel para armazenar o nome e a quantidade de
// experiencia de um heroi, depois utilize uma estrutura de decisao para apresentar alguma das mensagens.

let nome_heroi = "Felipe";
let experiencia = 9500;

switch (true) {
    case experiencia < 1000:
        console.log("O heroi de nome " + nome_heroi + " esta no nivel de Ferro");
        break;
    case experiencia > 1000 && experiencia <= 2000:
        console.log("O heroi de nome " + nome_heroi + " esta no nivel de Bronze");
        break;
    case experiencia > 2000 && experiencia <= 5000:
        console.log("O heroi de nome " + nome_heroi + " esta no nivel de Prata");
        break; 
    case experiencia > 6000 && experiencia <= 7000:
        console.log("O heroi de nome " + nome_heroi + " esta no nivel de Ouro");
        break;  
    case experiencia > 7000 && experiencia <= 8000:
        console.log("O heroi de nome " + nome_heroi + " esta no nivel de Platina");
        break;  
    case experiencia > 8000 && experiencia <= 9000:
        console.log("O heroi de nome " + nome_heroi + " esta no nivel de Ascendente");
        break;
    case experiencia > 9000 && experiencia <= 10000:
        console.log("O heroi de nome " + nome_heroi + " esta no nivel de Imortal");
        break;
    case experiencia > 10000 :
        console.log("O heroi de nome " + nome_heroi + " esta no nivel de Radiante");
        break;

  }