//Atividade 4: Criar um sistema de funcionários
//Crie uma classe Funcionario com os atributos:
//nome
//salario
//cargo
class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
        
    }

//E métodos:
//aumentarSalario(percentual): aumenta o salário com base no percentual passado.
aumentarSalario(percentual) {
    if (percentual >0) {
        const aumento = this.salario * (percentual / 100);
        this.salario += aumento;
        console.log(`Salário aumentado em ${percentual}$. Novo salário: R${this.salario.toFixed(2)}`);
    } else {
        console.log("o percentual de aumento deve ser positivo.");
    }
}

//exibirInfo(): exibe os detalhes do funcionário.Ger
exibirInfo() {
  console.log(`Nome: ${this.nome}`);
  console.log(`Cargo: ${this.cargo}`);
  console.log(`Salário: R$${this.salario.toFixed(2)}`); // Exibe o salário com duas casas decimais
}
}

// Exemplo de uso
const funcionario1 = new Funcionario("Julya", 5000, "Analista de Sistemas");
funcionario1.exibirInfo();
funcionario1.aumentarSalario(5); // Aumenta o salário em 5%
funcionario1.exibirInfo();
