//Aula 29

let btn = document.querySelector('#btnDb');

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

btn.addEventListener('click', showDb, false);

