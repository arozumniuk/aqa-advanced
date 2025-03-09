import chalk from 'chalk';

const averageGrade = 1111;

switch (true) {
    case averageGrade < 0 :
        console.log(chalk.bgRed("ти, мабуть, навіть трошки нашкодив?"));
        break;
    case averageGrade <= 60:
        console.log(chalk.redBright("Незадовільно"));
        break;
    case averageGrade <= 70:
        console.log(chalk.redBright("Задовільно"));
        break;
    case averageGrade <= 80:
        console.log(chalk.yellow("Добре"));
        break;
    case averageGrade <= 90:
        console.log(chalk.black("Дуже добре"));
        break;
    case averageGrade <= 100:
        console.log(chalk.green("Відмінно"));
        break;
    default:
        console.log(chalk.bgRed("Ты читер, однако"));
}
