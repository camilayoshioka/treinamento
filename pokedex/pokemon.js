const result = document.querySelector('.result')
const img = document.querySelector('img')
const pokemonName = document.querySelector('#campoDeTexto')
const button = document.querySelector('#button')

function achaPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value.toLowerCase()}`)
    .then(response => response.json())
    .then(function buscaPokemon(data) {
        result.innerHTML = "Nome: " + data.name + '<br>' + 'Peso: ' + data.weight + '<br>' + 'Tipo: ' + data.types[0].type.name
        img.src = data.sprites.front_default
        switch (data.types[0].type.name) {
        case 'electric':
            result.style.backgroundColor = '#FBFB72'
            break
        case 'normal':
            result.style.backgroundColor = '#CA98A7'
            break
        case 'bug':
            result.style.backgroundColor = '#1C4B27'
            break
        case 'bug':
            result.style.backgroundColor = '#1C4B27'
            break    
        }
    })
    .catch(error => result.innerHTML = "NÃO ENCONTRADO")
}

button.addEventListener('click', achaPokemon)









