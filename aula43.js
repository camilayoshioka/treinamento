const search = document.querySelector('#search')

function sendForm() {
    const ajax = new XMLHttpRequest()
    ajax.open("GET", 'aula43.php')
    ajax.onreadystatechange = function() {
        if (ajax.status === 200 && ajax.readyState === 4) {
            console.log(ajax.responseText)
        }
    }
    ajax.send()
}

search.addEventListener('keyup', debounce(sendForm, 3000))

//Função debounce

function debounce(func, wait) {
    let timeout
    return function() {
        clearTimeout(timeout)
        timeout = setTimeout(func, wait)
    }
}