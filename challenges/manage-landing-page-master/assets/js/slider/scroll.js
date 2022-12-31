
export function scroll(slider_wrapper) {

  let wheelTimer;

  function smoothMoving(position, to = 'next') {

    let timer;
    let count = position / 10;
    clearInterval(timer)
    timer = setInterval(() => {
      if (count < position) {
        if (to === 'next') {
          slider_wrapper.scrollLeft += count
        } else {
          slider_wrapper.scrollLeft -= count
        }

        count = count + count
      } else {
        clearInterval(timer)
      }
    }, 90)
  }

  function moveScroll(position) {
    const isPositive = position > 0 ? true : false;
    const wrapperWidth = slider_wrapper.offsetWidth;
    const wrapperScrollWidth = slider_wrapper.scrollWidth
    const currentScrollPosition = slider_wrapper.scrollLeft;

    // Distance to be moved
    const sliderItemWidth = parseInt(340);

    // Check if scroll position if at the end
    const isCurrentPositionStart = currentScrollPosition === 0 ? true : false;
    const isCurrentPositionEnd = (wrapperWidth + currentScrollPosition) >= wrapperScrollWidth ? true : false;


    if (isPositive) {
      if (isCurrentPositionEnd) {
        return document.documentElement.style.overflowY = 'unset'
      }

      smoothMoving(sliderItemWidth)
      document.documentElement.style.overflowY = 'hidden'

    } else {

      if (isCurrentPositionStart) {
        return document.documentElement.style.overflowY = 'unset'
      }

      smoothMoving(sliderItemWidth, 'prev')
      document.documentElement.style.overflowY = 'hidden'
    }

  }

  function handleWheel(event) {
    const mousePosition = event.deltaY;
    clearTimeout(wheelTimer)
    moveScroll(mousePosition);
    wheelTimer = setTimeout(() => {
      document.documentElement.style.overflowY = 'unset'
    }, 450)
  }

  slider_wrapper.addEventListener('wheel', handleWheel)
  function handleMouseout() {
    document.documentElement.style.overflowY = 'unset'
  }

  slider_wrapper.addEventListener('mouseout', handleMouseout)
  slider_wrapper.addEventListener('mouseleave', handleMouseout)
}
