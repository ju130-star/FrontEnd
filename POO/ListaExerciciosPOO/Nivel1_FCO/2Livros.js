class Livros {
  constructor(titulo, autor, paginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.paginas = paginas;
  }
  exibirInfo() {
    console.log(`Título: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Páginas: ${this.paginas}`);
  }
}

const Livro1 = new Livros("Dom Casmurro", "Machado de Assis", 346);
Livro1.exibirInfo();
