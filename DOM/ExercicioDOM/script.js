// Exercicio parte 1 - exibir no console

let titulo = document. getElementsById('titulo');
let parargafo = document.querySelector("paragrafo");

console.log('titulo');
console.log('paragrafo');

// parte 2 - modificar elemento
function mudarTexto( ){
    titulo.innerText = "Novo Titulo";
    paragrafo.innerText = "Novo paragrafo";
}

//parte 3 - modificar estilo
function mudarFundo() {
    let body =document. querySelector("body");
    body.style.backgroundColor = "blue";
}
 //parte 4 - adicionar classe ao elemento
 function adicionarClasse() {
    titulo.classList.add("descricao");
    document.querySelector(".descricao").style.color = "red";
 }