//Aula 23 e 24

let mensagem = 'Mas te vejo e sinto o brilho desse olhar que me acalma e me traz força pra encarar tudo Mas te vejo e sinto o brilho desse olhar que me acalma e me traz força pra encarar tudo Mas te vejo e sinto o brilho desse olhar que me acalma e me traz força pra encarar tudo';

let regex = /^[a-z0-9.]+@[a-z0-9]+\.+[a-z]+(\.[a-z]+)?$/g;

let result = mensagem.match(regex);
let exReplace = mensagem.replace(regex, '______');
console.log(result);
console.log(exReplace);

let email = 'camila.yoshioka@qualitydigital.global';

let validaEmail = email.match(regex);
if (validaEmail != null) {
    console.log('Email válido');
} else {
    console.log('Email inválido');
}

//Aula 25 e 26

let form = document.querySelector('#form1');
let inpText = document.querySelector('#inpText');
let botaoEnviar = document.querySelector('#enviar');
let textao = document.querySelector('#textArea')
enviar.addEventListener('click', consertaerro, false);

let lengthArea = document.querySelector('#lengthArea');

function validateTextao() {
    if (textao.value == '') {
        alert('Preencha o campo!');
    }    
}


function consertaerro() {
    if (botaoEnviar && inpText.value=='') {
        alert('Preencha o campo');
    } else {
        alert('Enviado');
    }
}        


inpText.style.backgroundColor = '#FFF9D0';



form.action = 'teste.php';
console.log(inpText);

//Text Area

console.log(textao);
//textao.addEventListener('blur', validateTextao, false)

function countArea(event) 
{
    lengthArea.innerHTML = event.target.textLength;
    if (event.target.textLength >= 30) {
        textao.setAttribute('disabled', 'disabled');
    }
}

textao.addEventListener('keyup', countArea, false)