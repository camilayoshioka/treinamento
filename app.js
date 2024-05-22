//Variaveis

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

let app = express()
app.use(cors())
let urlencodedParser = bodyParser.urlencoded({extended:false})

app.post('/', urlencodedParser, function(request, response) {
    console.log(request.body)
    const obj = {
        name: request.body.name,
        age: 18
    }
    response.json(obj)
})

app.get('/about', function(request, response) {
    response.send('Feito por Camila')
})

app.get('/contato', function(request, response) {
    response.send('Entre em contato')
})

let port = 3000
app.listen(port)


