let texto = "Aula de JavaScript";

//contagem dos caracteres  (length)
console.log(texto.length); //18

// Maiúscula e Minúscula
console.log(texto.toUpperCase()); //Maiúscula
console.log(texto.toLowerCase()); //Minúscula

//Partes da String
console.log(texto.substring(0,4));
console.log(texto.slice(-10));

// Substituição de texto
let novoTexto = texto.replace("Java",'Type');
console.log(novoTexto);

// Trim (Tesoura)
let textoEspaço = "  JavaScript  ";
let textoCortado = textoEspaco.trim();
console.log(textoEspaço);
console.log(textoCortado);

// slit (separação)'
let linguagens = "JavaScript, Python, PHP, C++, Java";
let LinguagensArray = linguagens.split(',');
console.log(linguagens);
console.log(LinguagensArray);
