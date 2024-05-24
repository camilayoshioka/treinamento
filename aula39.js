let result = document.querySelector('#result')

function relogio() {
    let date = new Date()
    let hora = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()
    result.innerHTML = hora + ':' + minutos + ':' + segundos
    setTimeout(relogio, 1000)
}

relogio()