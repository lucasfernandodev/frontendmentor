import Paths from './paths.js';
import toggleScroll from './toggleScroll.js';

// Adiciona animação ao scroll
window.addEventListener('scroll', () => toggleScroll())



// Seleciona o container que vai os cards
const cards = document.querySelector('.cards');

// Pega a url de onde está os projetos
const url = 'https://lucasfernandodev.github.io/frontendmentor/challenges/';

// Carrega os cards
for (let path of Paths) {

    if(path.id === 'ecommerce-product-page-main'){
        cards.innerHTML += `
        <div class="card">
            <a href="https://sneakears.netlify.app" /><h2 class="title">${path.title}</h2></a>
            <img src="./challenges/${path.id}/docs/design/desktop-preview.jpg" alt="${path.title}" loading="lazy"/>
        </div>`
    }else{
        cards.innerHTML += `
        <div class="card">
            <a href="${url + path.id}" /><h2 class="title">${path.title}</h2></a>
            <img src="./challenges/${path.id}/docs/design/desktop-preview.jpg" alt="${path.title}" loading="lazy"/>
        </div>`
    }
}






