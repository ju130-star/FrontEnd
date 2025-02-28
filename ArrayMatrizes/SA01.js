const prompt = require("prompt-sync")();
let notas =[];

function inserirNotas(){
    let nota = Number(prompt("Digite a nota: "));
    notas.push(nota);
}
   
function CalcularMedia(){
    let media = notas.reduce((soma, nota) => soma+nota,0)/notas.length
    console.log("A média e: " + media)
}
function menu(){
    let continuar = true
    while (continuar){
        console.log("===Calculadora Média===");
        console.log("|1. Inserir nota    |");
        console.log("|2. Calcular Média   |");
        console.log("|3. Sair             |");
        console.log("======================");
        let operacao = prompt("Escolha a Operação Desejada: ");
        switch (operacao) {
            case "1":
                inserirNotas();
                break;
            case "2":
                CalcularMedia();
                break;
            case "3":
                continuar = false;
                console.log("Saindo...");
                break;
            default:
                console.log("Essa Opção não é valida")
                break;
        }
        

    }
}