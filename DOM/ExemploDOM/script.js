// Exemplo de uso do DOM
// header -> DOM

let header =document.createElement("div");
document.body.appendChild(header);
header.style.backgroundColor = 'Black';
header.style.height = "8vh";
let menu = document.createElement('div');
header.appendChild(menu);
header.classList.add('header');
menu.classList.add('menu');
let menuItens = ["Início", "produtos", "Contato"];
menuItens.forEach(element => {
    let item = document.createElement('a');
    item.innerText = element;
    menu.appendChild(item); 
});
menu.style.display = "flex"; //coloca um ao lado do outro
menu.style.justifyContent = "space-around";
menu.style.alignItems = "center"
menu.style.color = "white";
menu.style.height = "100%";