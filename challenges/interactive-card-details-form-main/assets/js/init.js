import cardMirror from "./modules/cardMirror.js";
import error from "./modules/error.js";
import maskCard from "./modules/mask.js";
import processform from "./modules/processForm.js";

const form = document.querySelector("form");
const sliceTransition = document.querySelector("form .slice");
const boxSucess = document.querySelector(".successMessage");

document.querySelector('.form_button_submit').addEventListener('click', (e) => {
  e.preventDefault();

  const inputs = document.querySelectorAll("input");
  error.hideAll(inputs);

  const validForm = processform(inputs)

  validForm.map(result => {
    error.show(result.element);
  })

  if (validForm.length === 0) {
    sliceTransition.animate([
      {
        zIndex: 20,
        width: '400px',
        left: "0px",
      }
    ], {
      duration: 1200,
      fill: "forwards"
    })

    

    setTimeout(() => {
      form.style.display = "none";

      boxSucess.animate([
        { right: '0px' }
      ], {
        duration: 100,
        fill: "forwards"
      })

      boxSucess.style.display = "flex";
      
     
    }, 1200)


 
  }

});

cardMirror();
maskCard();