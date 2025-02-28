//Peça ao usuário para inserir um número decimal e exiba no console:
//O número arredondado para cima
//O número arredondado para baixo
//O número arredondado para o inteiro mais próximo

let prompt = require("prompt-sync")();
let decimal = prompt("Digite um número decimal: ");

let cima = Math.ceil(decimal);
console.log("O número arredondado para cima é: " + cima);

let baixo = Math.floor(decimal);
console.log("O número arredondado para baixo é: " + baixo);

let proximo = Math.round(decimal); 
console.log("O número arredondado para o inteiro mais próximo é: " + proximo);