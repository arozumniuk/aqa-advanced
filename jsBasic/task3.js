import chalk from "chalk";

const message = chalk.bold.yellow;
const warning = chalk.bold.red;

let age = 17;

let isAdult  =  age > 18

console.log(isAdult)

if (isAdult) console.log(message("Welcome in an real world, buddy"))
else  console.log(warning("Be careful. This guy is too small!"))

