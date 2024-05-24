const form1 = document.querySelector('#form1')

function enviaFormulario(event) {
    event.preventDefault()
    const ajax = new XMLHttpRequest()
    const formData = new FormData(form1)
    const btn = document.querySelector('#btn')
    const result = document.querySelector('#result')
    const progress = document.querySelector('.progress')
    ajax.open('POST','controller.php')
    ajax.onloadstart = function () {
        btn.value = 'Carregando...'
    }
    ajax.upload.onprogress = function (event) {
        if(event.lengthComputable){
            progress.style.width = ((event.loaded*100)/event.total)+'%'
        }
    }
    ajax.onloadend=function () {
        btn.value = 'Salvar'
        progress.style.display = 'none'
        result.innerHTML = 'Foto carregada com sucesso!'
    }
    ajax.send(formData)
}

form1.addEventListener('submit', enviaFormulario)
