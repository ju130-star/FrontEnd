class Funcionario {
  constructor(nome, salario) {
    this.nome = nome;
    this.salario = salario;
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Salário: R$${this.salario.toFixed(2)}`); 
  }
}

class Gerente extends Funcionario {
    constructor(nome,salario,bonus) {
        super(nome,salario);
        this.bonus = bonus;
    }
    salarioTotal() {
        return this.salario + this.bonus;
    }
    exibirInfo() {
        super.exibirInfo();
        console.log(`Bônus: R$${this.bonus.toFixed(2)}`);
        console.log(`Salário Total: R$${this.salarioTotal().toFixed(2)}`);
    }
}
const gerente1 = new Gerente("Julya", 7000, 1500);
gerente1.exibirInfo();