//Atividade 3: Criar uma classe representando uma conta bancária
//Crie uma classe ContaBancaria com os atributos:
//titular
//saldo

class ContaBancaria {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }


//E métodos:
//depositar(valor): adiciona saldo.
depositar(valor) {
    if (valor > 0) {
        this.saldo += valor;
        console.log(`Deposito de R${valor} realizado com sucesso`);
    } else {
        console.log("O valor do depósito deve der positivo");
    }
}
//sacar(valor): remove saldo se houver saldo suficiente.
sacar(valor) {
    if (valor <= this.saldo){
        this.saldo -= valor;
        console.log(`Saque de R${valor} realizado com sucesso.`);
    } else {
        console.log("Saldo insuficiente para saque.");
    }
}

//exibirSaldo(): exibe o saldo atual.
exibirSaldo() {
    console.log(`Saldo atual de ${this.titular}: R$${this.saldo}`);
  }
}

// Exemplo de uso
const conta = new ContaBancaria("Julya");
conta.exibirSaldo();        //Saldo Atual
conta.depositar(350);      //Depósito
conta.sacar(100)           //Saque
conta.exibirSaldo();       //Saldo atual
conta.sacar(300);          //Saldo insuficiente
