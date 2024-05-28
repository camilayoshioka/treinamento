const result = document.querySelector('.result')
const result2 = document.querySelector('.result2')
const result3 = document.querySelector('.result3')

function data(author, age) {
    return "O livro é " + this.title + " e tem " + this.pages + " páginas. O autor é " + author + " e tem " + age + " anos"
}

const book1 = {
    title: "Harry Potter",
    pages: 500
}

const book2 = {
    title: "Jogos Vorazes",
    pages: 371
}

const book3 = {
    title: "É assim que termina",
    pages: 363,
}

result.innerHTML = data.call(book1, 'JK', 58)

result2.innerHTML = data.apply(book2, ['Suzanne Collins', 61])


const newFunction = data.bind(book3)
result3.innerHTML = newFunction()




 