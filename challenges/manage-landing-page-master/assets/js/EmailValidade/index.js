export function EmailValidade() {
  const forms = document.querySelectorAll('form');

  function formHandle(event, form) {
    const errorMessage = 'Please insert a validade email';
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");


    event.preventDefault()
    event.stopPropagation()

    const input = form.querySelector('input')
    const value = input.value;

    const isValidEmail = emailRegex.test(value)

    if (!isValidEmail) {
      if (!form.querySelector('.errorMessage')) {
        const message = document.createElement('p')
        message.className = 'errorMessage';
        message.innerText = errorMessage;
        form.insertAdjacentElement('beforeend', message)
      }

      input.classList.add('invalid')
    } else {
      form.removeChild(form.querySelector('.errorMessage'));
      input.classList.remove('invalid')
    }
    console.log(value)
  }

  forms.forEach(form => form.addEventListener('submit', evt => formHandle(evt, form)));
}
