/*const obj2 = new app(500,2000)
console.log(obj2. result())
*/


//Aula 36

import {sum, percent, mult} from './modules/mymath.js'
import {ClassPerson} from './class/ClassPerson.js'
import {ClassJob} from './class/ClassJob.js'

console.log(sum(1 ,3))
console.log(mult(2 ,3))

console.log(percent(6, 10))

const person = new ClassPerson()
person.setPerson('Camila', 34)
console.log(person.getData()) 

