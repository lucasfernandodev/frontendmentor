export function Actions() {
  const slider = document.querySelector('.slider-wrapper');
  const avatars = document.querySelectorAll('.slider-avatar');
  const actions = document.querySelectorAll('.actions .dot');

  avatars.forEach((avatar, index) => {
    function obCallback(payload) {
      actions.forEach(dots => dots.classList.remove('dot-active'))
      if (payload[0].isIntersecting) {
        {
          actions[index].classList.add('dot-active')
        }
      }
    }

    const ob = new IntersectionObserver(obCallback, {
      root: slider,
      threshold: 1
    });

    ob.observe(avatar);
  })
}
