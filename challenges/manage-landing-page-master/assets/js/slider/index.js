import { Actions } from "./actions.js";
import { scroll } from "./scroll.js";

export function slider() {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  scroll(sliderWrapper)
  sliderWrapper.addEventListener('contextmenu', (event) => {
    event.preventDefault()
    event.stopPropagation()
  });
  Actions()
}
