var radius = 23.88;

console.log (Math.PI * radius ** 2)
let circleArea = Math.PI * Math.pow(radius, 2);
console.log (`Circle area is:  ${circleArea}`)


let length = 22.333;
let width = 33;
let square = length * width

console.log (`Square is: ${square}`)


var radius = 22;
let height = 33
let volume = Math.PI * Math.pow(radius, 2) * height;

console.log(`Volume is: ${volume}`);

let allValues = [circleArea, square, volume]

allValues.forEach(value => console.log(value.toFixed(2)))


