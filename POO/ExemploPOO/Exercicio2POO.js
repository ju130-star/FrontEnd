// Atividade 2: Criar uma classe representando um veículo
//Crie uma classe Veiculo com os seguintes atributos:
//marca
//modelo
//ano

class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

//Método
//exibirInfo(): exibe os detalhes do veículo.

  exibirInfo() {
    console.log(`Veiculo: ${this.marca}, ${this.modelo}, ${this.ano}`);
  }
}

// Subclasse Carro que herda de Veiculo
  class Carro extends Veiculo {
    constructor(marca, modelo, ano, quantidadeportas) {
      super(marca, modelo, ano);
      this.quantidadeportas = quantidadeportas;
    }

// Sobrescreve o método exibirInfo para incluir as portas
    exibirInfo() {
      super.exibirInfo();
      console.log(`Quantidade de portas: ${this.quantidadeportas}`);
    }
  }

// Exemplo de uso
const meuCarro = new Carro("Hyundai", "Creta", 2024, 4);
meuCarro.exibirInfo();
