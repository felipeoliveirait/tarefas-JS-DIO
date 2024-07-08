// Definindo a classe Heroi
class Heroi {
    // Construtor da classe para inicializar as propriedades
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para o herói atacar
    atacar() {
        let ataque;

        // Define o tipo de ataque baseado no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'habilidades especiais';
                break;
        }

        // Exibe a mensagem do ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
// Cria um novo herói
let meuHeroi = new Heroi('Felipe', 35, 'guerreiro');

// Chama o método atacar do herói
meuHeroi.atacar();  // Saída: O guerreiro atacou usando espada
