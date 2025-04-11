// Classe Calculadora com métodos estáticos (static)
class Calculadora {
  // Método estático para soma
  static somar(a, b) {
    return a + b;
  }

  // Método estático para subtração
  static subtrair(a, b) {
    return a - b;
  }

  // Método estático para multiplicação
  static multiplicar(a, b) {
    return a * b;
  }

  // Método estático para divisão
  static dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Erro: Divisão por zero!";
    }
  }
}

// Exemplo de uso dos métodos estáticos
console.log(Calculadora.somar(10, 5)); // 15
console.log(Calculadora.subtrair(10, 5)); // 5
console.log(Calculadora.multiplicar(10, 5)); // 50
console.log(Calculadora.dividir(10, 5)); // 2
console.log(Calculadora.dividir(10, 0)); // Erro: Divisão por zero!
