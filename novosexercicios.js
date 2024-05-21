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
let botao = botaoEnviar.addEventListener('click', consertaerro, false);

let lengthArea = document.querySelector('#lengthArea');

function validateTextao() {
    if (textao.value == '') {
        alert('Preencha o campo!');
    }    
}

function consertaerro(botaoEnviar) {
    if (botaoEnviar && inpText.value=='') {
        alert('Preencha o campo');
        submitForm(event);
    } else {
        alert('Enviado');
        submitForm(event);
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


//Aula 26

let checkbox = document.querySelector('#check');
console.log(checkbox.checked);
/* if (checkbox.checked == false){
    alert('Aceite os termos');
}
*/

//Radio

let radio = document.getElementsByName('gender');

function radioTeste(event) {
    if(event.target.value == 'Male') {
        alert('Male');
    } else {
        alert('Female');
    }
}
for(let i=0; i < radio.length; i++) {
    radio[i].addEventListener('click', radioTeste, false);
}

//Select

let sel = document.querySelector('#sel');

function selValidate(event) {
    if (event.target.selectedIndex == 0) {
        alert('Selecione uma opção');
    }
}

sel.addEventListener('change', selValidate, false);

//Botao

let btn = document.querySelector('#btn');

function submitForm(event) {
    event.preventDefault();
}

btn.addEventListener('click', submitForm, false);

//Aula 27

let gallery = document.querySelector('.gallery');
let files = document.querySelector('#img');

function imgPreview(event) {
    gallery.innerHTML = '';
    let files = event.target.files;
    for (let i=0; i < files.length; i++) {
        if (files[i].size > 500000) {
            alert('imagem muito grande')
        } else {
            let reader = new FileReader();
            reader.onload = function (event) {
                let urlImg = event.target.result;
                let newImg = document.createElement('img');
                newImg.setAttribute('src', urlImg);
                newImg.style = 'width: 100px; margin: 5px;';
                gallery.appendChild(newImg);
            }
        }    
        reader.readAsDataURL(files[i]);
    }
}

files.addEventListener('change', imgPreview, false);

//Aula 28

let novoBotao = document.querySelector('#novobotao');

/*setTimeout(contador, 3000);
setInterval(contador, 3000);
console.log('Hello');

function contador() {
    for (let i=0; i < 100; i++){
        console.log(i);
    }
}

novoBotao.addEventListener('click', contador, false);
console.log('world');
*/ 

let i=0;
function contador() {
    i++;
    console.log(i);
    if(i >= 5){
        return;
    }
    setTimeout(contador, 2000);
}
contador();

//Aula 29

let botaoDb = document.querySelector('#btnDb');

function showDb() {
    let ajax = new XMLHttpRequest();
    ajax.open('GET', 'db.json');
    ajax.onreadystatechange = function() {
        if (ajax.status === 200 && ajax.readyState === 4){
            let resposta = JSON.parse(ajax.responseText);
            let car = resposta.car;
            for (let i=0; i < car.length; i++){
                console.log(car[i].year);
            }
        }    
    }
    ajax.send();
}

botaoDb.addEventListener('click', showDb, false);

