const result = document.querySelector('.inicio')
const img = document.querySelector('img')
const pokemonName = document.querySelector('#campoDeTexto')
const button = document.querySelector('#button')

function achaPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value.toLowerCase()}`)
    .then(response => response.json())
    .then(function buscaPokemon(data) {
        result.innerHTML = "Nome: " + data.name + '<br>' + 'Peso: ' + data.weight + '<br>' + 'Tipo: ' + data.types[0].type.name
        img.src = data.sprites.front_default
        function toggle(event) {
            if (result.classList.contains('inicio')) {
                result.classList.remove('inicio')
            } else {
                result.classList.add('result')
            }
        }
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
        case 'dark':
            result.style.backgroundColor = '#5A5979'
            break
        case 'dragon':
            result.style.backgroundColor = '#61CAD9'
            break  
        case 'fairy':
            result.style.backgroundColor = '#EA1369'
            break  
        case 'fighting':
            result.style.backgroundColor = '#EF6138'
            break                       
        }
    })
    .catch(error => result.innerHTML = "NÃO ENCONTRADO")
}

button.addEventListener('click', achaPokemon)









