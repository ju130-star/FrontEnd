// Tipos de Dados

var nome = "Julya"; //tipo texto(String)
var idade = 17; //tipo inteiro (number)
var nota = 9.5; //tipo decimal (number)
var data; ///tipo indefinido (underfined)
var aprovado = true; //tipo boleana (boolean)
var diploma = null; // tipo nulo (null)

//Variaveis e Constantes ( var, let, constante)
var nota1 = 5; //declarar
nota1 = 7; //redefini
var nota1 = 10; //redeclarar

let nota2 = 8; //declarar
nota2 = 9; //redefinir
//let nota2 =7; // erro para redeclarar

const media = 7.5; //declarar
//media = 8; // erro pois não pode redefinir
//const media =8; //erro para redeclarar

//operadores Aritimédicos
let a = 10;
let b = 3;
console.log ("Soma: "+ a+b);
console.log ("Sub: " + a - b);
console.log ("Multi: " + a * b);
console.log ("Div: " + a / b);
console.log ("Resto: " + a % b);

//Operadores Relacionais (boolean)

console.log (5<10); //true
console.log ("10"==10); //true
console.log ("10"===10); //false

//Operadores Lógicos (E &&, Ou ||, Não !)
var notaA =5;
var notaB =7;
console.log (notaA >= 7 || notaB >= 7); //true
console.log (notaA >= 7 && notaB >= 7); //false
console.log (!true); //false

//Condicionais(if/else, switch(case)
var idade = 25;
if (idade>=18) {
    console.log ("Maior de idade");
} else {
    console.log ("Menor de idade")
}

var mes = 2
switch (mes) {
    case 1:
        console.log ("Janeiro")
        break;
    case 2:
        console.log ("Fevereiro")
        break;
    default:
        console.log ("Outro Mês")
        break;
}

// loops (for /while/ dowhile)
for (let i = 0; i < 5; i++) {
    console.log("Iteração: "+ i);
}

var condition = true
var numero = 3
var contador = 0
while (condition) {
    let sorteio = Math.random(5)
    if (numero == sorteio) {
        console.log("Acetou com "+contador +"tentativas");
        condition = false;
    }
}

//Função funcion
function saudacao (nome) {
    return "Olá "+nome
}
console.log(saudacao("Olá"))