var prompt = require("prompt-sync")();
let idade = prompt("Digite a sua idade: ");

if (idade < 18) {
    console.log("Você é uma Criança!");
} else if (idade >= 18 && idade < 50) {
    console.log("Vôce é um Adulto!");
} else {
   console.log("Você é um Idoso!");
}