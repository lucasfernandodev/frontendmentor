import Paths from './paths.js';
import toggleScroll from './toggleScroll.js';

// Adiciona animação ao scroll
window.addEventListener('scroll', () => toggleScroll())



// Seleciona o container que vai os cards
const cards = document.querySelector('.cards');

// Pega a url de onde está os projestos
const url = 'https://lucasfernandodev.github.io/frontendmentor/challenges/';

// Carrega os carfs
for (let path of Paths) {
    cards.innerHTML += `
        <div class="card">
            <a href="${url + path.id}" /><h2 class="title">${path.title}</h2></a>
            <img src="./challenges/${path.id}/docs/design/desktop-preview.jpg" alt="${path.title}" loading="lazy"/>
        </div>`
}





