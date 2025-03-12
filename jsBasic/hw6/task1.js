
function square_declaration(width, height) {
    return width * height;
}

const square_expression = function (width, height) {
    return square_declaration(width, height)
}

const square_arrow = (width, height) => {
    return width * height;
}

console.log(square_declaration(5,4))
console.log(square_expression(25,2))
console.log(square_arrow(100,124))

