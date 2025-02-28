// Função de Data e Hora

let agora = new Date(); // Instanciando um obj da classe Date
console.log(agora);
console.log(agora.toLocaleDateString);

// Funçoes GET eu pego informações 
console.log(agora.getFullYear());

// SET altera informaçãoes 
agora.setFullYear(2030);

// TO imprimi (transforma em formato de texto)
console.log(agora.toLocaleDateString());

// Manipulação de datas 
let data1 = new Date();
let data2 = new Date("2025-12-31");
let diferenca = data2-data1; //milisegundos
console.log(diferenca/(1000*60*60*24)); 