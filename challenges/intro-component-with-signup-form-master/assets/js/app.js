const sign = document.querySelector('.btn-green');
let group = document.querySelectorAll('form .form-group');
let inputs = document.querySelectorAll('.form-group input');
let erroMsg = document.querySelectorAll('.form-group .error')

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        return true
    } else {
        return false
    }
}

sign.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < inputs.length; i++) {
        group[i].classList.remove('validErro');
        if (inputs[i].value == '') {
            group[i].classList.add('validErro');
            return
        }

        if (inputs[i].classList.contains('email')) {
            if (!validacaoEmail(inputs[i])) {
                group[i].classList.add('validErro');
                return
            } else {
                group[i].classList.remove('validErro');

            }

        }
    }
})