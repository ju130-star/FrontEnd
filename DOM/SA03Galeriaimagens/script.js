//galerias de imagens- DOM

let uploadInput = document.getElementById("upload"); //pegando input
let addButton = document.getElementById("addImage"); // pegar o botão de enviar
let galeria = document.getElementById("galeria"); // pegando a galeria
let carrossel = document.getElementById("carrossel"); // pegando os espaços das imagens no carrossel

//upload das imagens
let imagens = [
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
  "https://images.unsplash.com/photo-1521747116042-5a810fda9664",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1531259683007-016a7b628fc3",
  "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd",
  "https://images.unsplash.com/photo-1494172961521-33799ddd43a5",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
]; //array -> o endereço das imagens

addButton.addEventListener(
    "click", ()=>{
        //pegar URL da imagem
        let imagemUrl = uploadInput.ariaValueMax.trim();
        if(imagemUrl ==="") return;
        imagens.push(imagemUrl);
        atualizarCarrossel();
        atualizarGaleria();
        uploadInput.value = "";
    }
);

//atualizar Carrossel
function atualizarCarrossel(){
    carrossel.innerHTML=""; //Limpar o Carrosel
    imagens.forEach(imagem => {
        const img = document.createElement("img");
        img.src = imagem;
        imagem.style.width ="100%";
        carrossel.appendChild(img);
        });
        carrossel.style.width = `${imagens.length*100}%`; //fazer operação, ajustando o tamanho do carrossel de acordo com o numero de imagens
        iniciarCarrossel();
    }

    //iniciar Carrossel
    function iniciarCarrossel(){
        let index = 0;
        setInterval(() => {
            index = (index +1) % imagens.length;
            carrossel.style.transition = `transform 1s easy-in-out`;
            carrossel.style.transition = `translateX(-${index*(100/imagens.leangth)}%)`;
        }, 2000);
    }

//atualizarGaleria
function atualizarGaleria(){
    galeria.innerHTML="";
    imagens.forEach((imagem,index) => {
        const card = document.createElement("div"); //criei a div
        card.classList.add("imagemCard"); //adicionei uma class
        const img = document.createElement("img");
        img.src = imagem;
        card.appendChild(img); //adicionar imagem ao card
        galeria.appendChild(card); //add card -> galeria
       });
}

atualizarGaleria();
atualizarCarrossel();
