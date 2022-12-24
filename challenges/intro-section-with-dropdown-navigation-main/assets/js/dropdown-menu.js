function dropdowMenu() {
  const toggleMenubutton = document.querySelector('.btn-menu');
  const menuLabel = document.querySelectorAll('.wrapper .item-label');


  menuLabel.forEach(label => {
    label.addEventListener('click', () => {
      if (getComputedStyle(toggleMenubutton).display !== 'flex') {
        menuLabel.forEach(el => el.parentNode.removeAttribute('open'))
      }
    })

    label.addEventListener('blur', () => {
      if (getComputedStyle(toggleMenubutton).display !== 'flex') {
        label.parentNode.removeAttribute('open');
      }
    })
  })
}

export default dropdowMenu
