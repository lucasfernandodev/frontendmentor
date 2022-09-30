export default function handlerMenu(){
  const buttonMenu = document.querySelector('.btn-menu');
  const menu = document.querySelector('.navigation-menu');
  
  buttonMenu.addEventListener('click', () => {
    const isVisible = menu.style.display === 'flex' ? true : false;
    menu.style.display = isVisible ? 'none' : 'flex';
  })
}