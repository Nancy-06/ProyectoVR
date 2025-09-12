'use strict';

window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;

        if (email === '') {
            showAlert('El campo email está vacío', 'error');
        } else if (expressionEmail.test(email) === false) {
            showAlert('Email inválido', 'error');
        } else {
            showCustomAlert();
            emailjs.sendForm('service_1nftfcv', 'template_hk8iorh', '#suscripcion', 'j6urrk7gekevPMa10');
            cleanInputs();
        }
    }

    function showAlert(message, type) {
        Swal.fire({
            text: message,
            icon: type,
            timer: 3000,
            showConfirmButton: false
        });
    }

    function showCustomAlert() {
        Swal.fire({
            title: 'Gracias por suscribirte!',
            icon: 'success',
            showConfirmButton: false
        });
    }

    function cleanInputs() {
        inscriptionTxt.value = '';
    }
}
