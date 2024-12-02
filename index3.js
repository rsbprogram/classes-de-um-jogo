// Definição da classe Herói
class Heroi {
  // Construtor da classe que inicializa as propriedades
  constructor(nome, idade, tipo) {
    this.nome = nome; // Nome do herói
    this.idade = idade; // Idade do herói
    this.tipo = tipo; // Tipo do herói (guerreiro, mago, etc.)
  }

  // Método atacar que exibe a mensagem conforme o tipo do herói
  atacar() {
    let ataque;

    // Determina o ataque com base no tipo do herói
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
        ataque = 'ataque desconhecido';
    }

    // Exibe a mensagem de ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de criação de heróis e execução do ataque
const heroi1 = new Heroi('Merlin', 35, 'mago');
const heroi2 = new Heroi('Arthur', 30, 'guerreiro');
const heroi3 = new Heroi('Liu Kang', 28, 'monge');
const heroi4 = new Heroi('Naruto', 18, 'ninja');

// Testando os métodos de ataque
heroi1.atacar(); // O mago atacou usando magia
heroi2.atacar(); // O guerreiro atacou usando espada
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
