function sum(x, y) {
    return x + y
}

function percent(value, total) {
    return mult(value, 100)/total + '%'
}

function mult(x, y) {
    return x * y
}

export {sum, percent, mult}