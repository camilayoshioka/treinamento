//Aula 34

/* function person(name) {
    this.name=name
}

const obj = new person('Camila')
console.log(obj)*/

/* const obj = {
    name:''
}

const obj = new Object()
obj.name = 'Camila'
console.log(obj) 
*/

function person(name,func) {
    this.name = name
    this.friends = ['Juliana','Gabriel']
    this.func = func
}

person.prototype.city = 'RJ'
person.prototype.salario = function () {
    if(this.func === 'manager') {
        return 3000
    } else if(this.func === 'user') {
        return 100
    }
}

const obj = new person('Camila', 'manager')
obj.friends.push('Daniel')
let obj2 = new person('Ana','user')
console.log(obj)
console.log(obj2)
console.log(obj2.salario())


//Aula 35

function app(adiant, salario) {
    this.adiant = adiant
    this.salario = salario
}
app.prototype.percent=function () {
    return this.adiant*100/this.salario
};
app.prototype.result=function () {
    return 'O funcionário recebeu '+this.percent()+ '% relativo ao adiantamento'
};

function test(){
    console.log('Função teste')
}