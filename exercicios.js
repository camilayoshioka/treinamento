let arr1 = [11, 3, 21, 2, 45, 89, 65];
let arr2 = ['camila', 'gabriel', 'daniel', 'juliana', 'ana'];


//Concat
let arr3 = arr1.concat(arr2);

//Every
let everyA = arr1.every(
    function verificar(elem, ind, obj) {
        return (typeof elem == "number");
    }
);

//Filter
let filterA = arr3.filter(
    function verificar(elem, ind, obj) {
        return (typeof elem == "string");
    }
);

//ForEach
let data = "";
let forEachA = arr3.forEach(
    function teste(elem) {
        data += elem+ "- Teste - ";
    }
);

//IndexOf
let indexOfA = arr3.indexOf("juliana");

//Join
let joinA = arr3.join(" - ");

//Map
let mapA = arr3.map(
    function multiplicar(elem) {
        if (typeof elem == "number") {
            return elem * 3;
        }else {
            return elem;
        }
            
    }
)

//Push, pop e reverse
let pushA = arr3.push('ricardo');
let popA = arr3.pop();
//let reverseA = arr3.reverse();

//Some
let someA=arr3.some(
    function verificar(elem) {
        return (typeof elem == "float");
    }
)

//Reverse
let reduceA=arr1.reduce(
    function verificar(v1, v2, ind, arr) {
        return v1*v2;
    }
);

//Shift
//let shiftA = arr3.shift();

//let sliceA=arr3.slice(5,12);


let sortA=arr3.sort();


let spliceA = arr3.splice(3,5);


console.log(arr3)
console.log(spliceA);


/*
let selecionar = document.querySelectorAll(".btn");
selecionar = selecionar.forEach(
    function botaovermelho(elem) {
        elem.className = 'colorido';
    }
);

let escolheLista = document.querySelectorAll("li");
escolheLista = escolheLista.forEach(
    function mudaTexto(elem) {
        elem.innerText = "Outro Exemplo";
    }
)
*/

//Aula 19

let btn = document.querySelectorAll(".button");
let body = document.querySelector("body");

function mudaCor(event)
{
    body.style.backgroundColor = event.target.dataset.color;
}
    for(let i=0; i<btn.length; i ++) {
        btn[i].addEventListener("click", mudaCor, false)
    }

//Aula 20

let botao = document.querySelector('#botao20');
let main = document.querySelector('.main');

function criaElemento(event)
{
    const novoBotao = document.createElement("button");
    novoBotao.id = 'novoBotao';
    novoBotao.innerHTML = 'Novo Botao';
    main.appendChild(novoBotao);
}

function alertar(){
    alert('Novo botao criado');  
}

function optEvents()
{
    if(event.target.id === 'novoBotao'){
        alertar();
    }else if(event.target.id === 'botao20'){
        criaElemento();
    }
}

main.addEventListener('click', optEvents, false);

//Aula 21

let imagem = document.querySelector('#gatos');
console.log(imagem.className);
console.log(imagem.dataset.info);

console.log(imagem.attributes);
console.log(imagem.hasAttribute('data-info'));
console.log(imagem.setAttribute('data-color', 'pink'));

//Aula 22

let botaoMenu = document.querySelector('#botao-menu');
let menu = document.querySelector('.menu');

function toggle(event){
    if (menu.classList.contains("show")){
        menu.classList.remove('show');
        botaoMenu.setAttribute('src', 'https://cdn-icons-png.flaticon.com/512/54/54447.png');
    } else {
        menu.classList.add("show");
        botaoMenu.setAttribute('src', 'https://cdn-icons-png.flaticon.com/256/1/1193.png');
    }
}

botaoMenu.addEventListener('click', toggle, false);










