import chalk from 'chalk';

const log = chalk.bold.yellow;

let stringVar
let intVar
let boolVar
let nullVar
let undefinedVar

console.log(log(stringVar = "stringVarValue"))
console.log(log(boolVar = !!stringVar))
console.log(log(intVar = +boolVar))
console.log(log(nullVar = null))
console.log(log(undefinedVar))