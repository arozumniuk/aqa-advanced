import chalk from 'chalk';

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

console.log(chalk.blue('Hello world!'));
console.error(error('Error!'));
console.warn(warning('Warning!'));

//todo :: why no result when invoked?
export function wow() {
    console.log(chalk.blue('Hello world!'));
    console.log(`
PASSED: ${chalk.red('90%')}
FAILED: ${chalk.green('40%')}
SKIPPED: ${chalk.yellow('70%')}
`);
}

