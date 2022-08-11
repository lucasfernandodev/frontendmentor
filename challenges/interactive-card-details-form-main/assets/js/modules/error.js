const error = {
  show: (element) => {
    element.parentElement.querySelector(".form_error").classList.remove("input_valid");
    element.classList.add("inputError");
  },

  hide: (element) => {
    element.parentElement.querySelector(".form_error").classList.add("input_valid");
    element.classList.remove("inputError");
  },

  hideAll: (elements) => {
    // Remove mensagens de erros;
    elements.forEach(el => {
      el.parentElement.querySelector(".form_error").classList.add("input_valid")
      el.classList.remove("inputError");
    });
  }
}

export default error;