// Função Matemática (Math)

//Math.sqrt //Math.pow

//Raiz Quadrada de 25
console.log(Math.sqrt(25)); //5

//Potêncial de um Nº
console.log(Math.pow(3,2)); // 9
console.log(Math.pow(4,3)); // 64
console.log(Math.pow(27,1/3)); // 3 Raiz Cubica

// Arrendondar usando Matc(round, floor, ceil)
// round - número mais próximo
console.log(Math.round(4.7)); // Retorna 5 (arredondamento para o inteiro mais próximo)
console.log(Math.ceil(4.1)); // Retorna 5 (arredonda para cima)
console.log(Math.floor(4.9)); // Retorna 4 (arredonda para baixo)

// Math random - número aleatórios
console.log(Math.random()); //0 -> 1
//0 -> 100
console.log(Math.random(Math.random()*100));
// 0 -> 99
console.log(Math.floor(Math.random()*100));
// 0 -> 100
console.log(Math.ceil(Math.random()*100));
//30 -> 40
console.log(Math.round(Math.random()*10+30));
//50 -> 100

//Math.abs (absolute)
console.log(Math.abs(-10)); //10
//Math.min (minimo)
console.log(Math.min(5, 2, 9, 3)); // 2 (o menor valor da lista)
//Math.max (Absolute)
console.log(Math.max(5, 2, 9, 3)); //  9 (o maior valor da lista)