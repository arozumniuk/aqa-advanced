import chalk from 'chalk';

const averageGrade = 0.1;

if (averageGrade >100 || averageGrade < 0 ) console.log(chalk.bgRed("Ты читер, однако"))

else if(averageGrade <=60) console.log(chalk.redBright("Незадовільно"))
 else if(averageGrade <=70) console.log(chalk.redBright("Задовільно"))
 else if(averageGrade <=80) console.log(chalk.yellow("Добре"))
 else if(averageGrade <=90) console.log(chalk.black("Дуже добре"))

else console.log(chalk.green("Відмінно"))
