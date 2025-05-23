// Atividade 1: Criar uma classe representando um produto
// Crie uma classe Produto com os atributos:
// nome
// preco
// estoque
class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  vender(quantidade) {
    if (quantidade > this.estoque) {
      console.log(
        `Estoque Insuficiente!!! quantidade em Estoque é = ${this.estoque}`
      );
      return;
    }
    this.estoque -= quantidade; //this.estoque = this.estoque - quantidade
    console.log(`${quantidade} ${quantidade===1?"Unidade":"Unidades"} vendida(s). Estoque restante: ${this.estoque}`);
 }

  repor(quantidade) {
    this.estoque += quantidade;
    console.log(`Estoque atual: ${this.estoque}`);
  }
  exibirInfo() {
    console.log(`Produto: ${this.nome}, ${this.preco}. Estoque: ${this.estoque}`);
  }

}
let produto1 = new Produto("Garrafa", 50.00, 5)
produto1.exibirInfo();
produto1.vender(2);
produto1.repor(5);
produto1.exibirInfo();
// E métodos:
// vender(quantidade): reduz o estoque
// repor(quantidade): aumenta o estoque
// exibirInfo(): mostra detalhes do produto

