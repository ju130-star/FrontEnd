//Peça ao usuário para inserir sua data de nascimento e calcule a idade dele em anos completos.
let prompt = require("prompt-sync")();
let idade = prompt("Digite sua data de nascimento: ");

let data1 = new Date(idade);
let data2 = new Date(new Date().toLocaleDateString());
let diferenca = data2 - data1; 
 console.log("Sua idade é: " + (data2 -data1));

