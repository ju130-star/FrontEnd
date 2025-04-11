class Pessoas {
  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
apresentar() {
    console.log (`A ${this.nome} tem ${this.idade} anos de idade.`)
 }
}

const Pessoa1 = new Pessoas ("Julya", "17")
Pessoa1.apresentar();