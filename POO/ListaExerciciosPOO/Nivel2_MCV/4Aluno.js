class Aluno {
  constructor(nome) {
    this.nome = nome;
    this.notas = [];
  }
  adicionarNota(nota) {
    if (nota >= 0 && nota <= 10) {
      this.notas.push(nota);
    } else {
      console.log("Nota inválida! Digite uma nota entre 0 e 10.");
    }
  }

  calcularMedia() {
    if (this.notas.length === 0) return 0;

    const soma = this.notas.reduce((total, n) => total + n, 0);
    return soma / this.notas.length;
  }
  situacao() {
    const media = this.calcularMedia();
    return media >= 7 ? "Apravodo" : "Reprovado";
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Notas: ${this.notas.join(", ")}`);
    console.log(`Média: ${this.calcularMedia().toFixed(2)}`);
    console.log(`Situação: ${this.situacao()}`);
  }
}

const aluno1 = new Aluno("Julya");

aluno1.adicionarNota(10);
aluno1.adicionarNota(9);
aluno1.adicionarNota(8);

aluno1.exibirInfo();