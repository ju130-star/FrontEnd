//Situação de aprendizagem 01 - Array
const prompt = require("prompt-sync")();

let notas = [];

function inserirNotas() {
    let nota = prompt("Digite a nota:");
    notas.push(nota);
}

function CalcularMedia(){
    let media = notas.reduce((soma, nota) => soma+nota,0)/notas.length
}
function menu(){
    
}