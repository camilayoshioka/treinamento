const form = document.querySelector('#form1')
const name = document.querySelector('#name')
const response = document.querySelector('.response')

function enviaFormulario(event) {
    event.preventDefault()
    const ajax = new XMLHttpRequest()
    const params = 'name=' + name.value
    ajax.open('POST', 'http://localhost:3000/')
    ajax.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    ajax.onreadystatechange = function() {
        if (ajax.status === 200 && ajax.readyState === 4){
            let array = JSON.parse(ajax.responseText)
            response.innerHTML = 'O usuario ' + array.name + ' possui ' + array.age + ' anos de idade'
        }
    }
    ajax.send(params)
}

form.addEventListener('submit', enviaFormulario)