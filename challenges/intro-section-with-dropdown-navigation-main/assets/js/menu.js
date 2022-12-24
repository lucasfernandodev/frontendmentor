function menu() {
  const navbar = document.querySelector('.navbar');
  const toggleMenu = document.querySelector('.btn-menu');
  const img = toggleMenu.querySelector('img');

  toggleMenu.addEventListener('click', () => {
    if (!toggleMenu.classList.contains('active')) {
      img.setAttribute('src', '/assets/images/icon-close-menu.svg')
      toggleMenu.classList.add('active')
      navbar.style.display = 'flex';
    } else {
      img.setAttribute('src', '/assets/images/icon-menu.svg')
      toggleMenu.classList.remove('active')
      navbar.style.display = 'none';
    }
  })
}

export default menu;
