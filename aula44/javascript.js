const parent = document.querySelector('.parent')
const child = document.querySelector('.child')
const grandchild = document.querySelector('.grandchild')
const form= document.querySelector('#form')

/*
parent.addEventListener('click', function() {
    console.log('parent')
}) 

child.addEventListener('click', function() {
    console.log('child')
})

grandchild.addEventListener('click', function() {
    console.log('grandchild')
})

parent.addEventListener('click', function(event) {
    console.log('this', this)
    console.log('event', event.target)
}) 

parent.addEventListener('click', function() {
    console.log('parent')
}) 

child.addEventListener('click', function() {
    console.log('child')
})

grandchild.addEventListener('click', function(event) {
    event.stopPropagation()
    console.log('grandchild')
})
*/

form.addEventListener('blur', function() {
    alert('oi')
}, true)