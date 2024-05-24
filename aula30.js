let form = document.querySelector('#form')

function sendForm(event) {
    event.preventDefault()
    let ajax = new XMLHttpRequest()
    ajax.open('POST', 'controller.php')
    ajax.onreadystatechange = function(){
        console.log(ajax.status)
        console.log(ajax.readyState)
        console.log(ajax.responseText);
    }
    ajax.send()
}

form.addEventListener('submit', sendForm)

