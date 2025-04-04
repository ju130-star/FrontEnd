class Carro {
  //não tem atributos diretos
  //constructor -> define os atribuos da classe
  constructor(marca, modelo, ano, cor, preco) {
    this.marca /*atributo */ = marca; //parametro da função/método,
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.preco = preco;
  }
  //método
  exibirInfo(){
    console.log(`Carro: ${this.marca}, ${this.modelo}, ${this.ano}, ${this.cor}, R$${this.preco}`);
  }
}

//criar Objetos da classe Carro
let carro1 = new /*new -> Instanciar novo abjeto */ Carro("FIAT","Uno",1994, "Cinza", 8000.00);
let carro2 = new Carro("GM", "Corsa", 2001, "Preto", 20000.00);

carro1.exibirInfo();
carro2.exibirInfo();

//atributos privados(#) e publicos
class Usuario{
    #nome; //declaração de atributos privado
    #senha;
    constructor(nome,senha){
        this.#nome = nome;
        this.#senha = FileSystemHandle;
    }
    //método privado
    #trocarSenha(nomeSenha){
        this.#senha = novaSenha;
    }
}