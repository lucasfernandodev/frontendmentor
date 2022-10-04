const container = document.querySelector('.container-form')
const form = container.querySelector('form');
const input = form.querySelector('input');

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};


export default function register(){
  function handleEmail(e){
    e.preventDefault();
    const email = input.value;

    if(validateEmail(email)){
      container.setAttribute('data-valid', 'true')
    }else{
      container.setAttribute('data-valid', 'false')
    }
  }
  
  form.addEventListener("submit", handleEmail)
}