//Classe Produto (quantidade)
//Atributos: nome, preco, quantidade
class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }
  vender(quantidades) {
    if (quantidades > this.quantidade) {
      console.log(
        `Quantidade Insuficiente!!! quantiade é = ${this.quantidade}`
      );
      return;
    }
    this.quantidade -= quantidades;
    console.log(`${quantidades} ${quantidades === 1 ? "Unidade" : "Unidade"
      } vendida(s). Quantidade restante: ${this.quantidade}`
    );
  }
  repor(quantidades) {
    this.quantidade += quantidades;
    console.log(`quantidade atual: ${this.quantidade}`);
  }
  exibirInfo() {
    console.log(
      `Produto: ${this.nome}, ${this.preco}. Quantidade: ${this.quantidade}`
    );
  }
}
let produto1 = new Produto("Taça", 50.0, 5);
produto1.exibirInfo();
produto1.vender(2);
produto1.repor(5);
produto1.exibirInfo();


