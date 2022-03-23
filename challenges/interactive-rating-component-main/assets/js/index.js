let COUNT_OPTIONS_SELECTED = 0;

const buttonsOptionFeedBack = document.querySelectorAll('[name=option]');
const buttonSubmit = document.querySelector('.submit');
const cardInput = document.querySelector('.card-input');
const cardOutput = document.querySelector('.card-output');
const containerElement = document.querySelector('.container');
const displayResultCountOptionsSelected = document.querySelector('.displayCountOptionSelected')

function onClick(e) {
  const btn = e.target;

  buttonsOptionFeedBack.forEach(btn => btn.classList.remove('active'))

  btn.classList.add('active');
  COUNT_OPTIONS_SELECTED =  btn.innerText;

}

buttonsOptionFeedBack.forEach(btn => btn.onclick = onClick.bind(btn))


// Altera o componente de visualização
buttonSubmit.addEventListener('click', (e) => {
  const btn = e.target;
  const container = containerElement;

  btn.classList.add('btn-disabled');
  btn.innerText = '';


  setTimeout(() => {
    container.classList.add('animationCloseCard')

    cardInput.setAttribute('data-view', false)
    cardOutput.setAttribute('data-view', true)
    displayResultCountOptionsSelected.innerHTML = COUNT_OPTIONS_SELECTED;
  }, 1850)
})
