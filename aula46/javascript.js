const a = 'Camila'
const b = 'Quality Digital'
const number1 = 5
const number2 = 10
const result1 = document.querySelector('.result')
const result2 = document.querySelector('.result2')
const array = [0, 1, 2, 'a', 'b']

/*
console.log(a + ' trabalha na ' + b)

console.log(`${a}
 trabalha na 
 ${b}`)

 console.log(`A soma dos números é
 ${number1 + number2}`)
 */

result1.innerHTML = `${a} 
<strong>trabalha</strong>
na ${b}`

result2.innerHTML = ""
array.map((elem,ind,obj) => {
    result2.innerHTML += `
    ${elem}`
 })

function tag(string,...values) {
    console.log(`
    ${values[1]} ${string[1]} ${values[0]}
    `)
}

tag `${a} trabalha na empresa ${b}`