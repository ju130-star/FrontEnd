//Crie uma função que receba uma data no formato "aaaa-mm-dd" e retorne o nome do dia da semana correspondente.
function obterDiaSemana(data) {
    const diasSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    const dataObj = new Date(data);
    const diaSemana = dataObj.getDay(); // Retorna um número 
    
    return diasSemana[diaSemana];
}

// Exemplo de uso
const data = "2025-03-07";
console.log(obterDiaSemana(data)); // Saída