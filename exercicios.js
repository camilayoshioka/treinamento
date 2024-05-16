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

let btn = document.querySelectorAll(".button");
let body = document.querySelector("body");

function mudaCor(event)
{
    body.style.backgroundColor = event.target.dataset.color;
}
    for(let i=0; i<btn.length; i ++) {
        btn[i].addEventListener("click", mudaCor, false)
    }



