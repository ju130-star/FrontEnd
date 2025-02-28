// arry e Matrizes

//arry
let numeros = [1,2,3,4,5,6,7,8,9];
console.log(numeros[8]);

let texto = ["cachorro", "bola", "sapato", "prédio"]; 
let mista = ["gato", 2, true];
console.log(texto[1]);
console.log(mista[1]);

// tamanho do arry (length)
console.log(texto.length); //4

// Adicionar elemenntos em uma arry ou alterar

// Adicionar

// Começo (unshift)
texto.unshift("pão");
console.log(texto);

// fim(pop)
texto.push("jogo")
console.log(texto);

// remover do começo (shift)
texto.shift();
console.log(texto);

// remover do final (pop)
texto.pop();
console.log(texto);

// alterar o valor
texto[2] = "tenis";
console.log(texto);

// Percorrer um arry (for // forEach)
for(let i = 0; i < numeros.length; i++) {
    console.log("numero["+i+"]="+numeros[i]);
}

// forEach
texto.forEach(t => {
    console.log(t)
});


let lista = [];
for (let i = 0; i<100; i+1){
    lista[i]=i++;
}
console.log(lista);

// retorna o indice
texto.indexOf("Tênis");

//splice (remover elementos de uma posição)
texto.splice(2,1);  //posição e quantidade
console.log(texto)

// operações avançadas de arry
let valores = [10,20,40,50];

// map
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);

//filter
let partevalores = valores.filter(x => x > 20);
console.log(partevalores);

// filter e map x<35 x*2
let partesvalores = valores.filter(x => x <35).map(x=>x*2);
console.log(partesvalores);

//reduce
// x = acomulador, y = valor atual
let soma = valores.reduce((x, y)=>(x+y), 0);

//sort
let z = [2,6,3,8,1,7,4,9,5];
z.sort();
console.log(z);