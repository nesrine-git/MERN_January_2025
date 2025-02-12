import { formatISODate, relativeDate, longDate, shortDate } from "./utils/formatDate.js";
import chalk from 'chalk';

console.log(chalk.red("Long dates:")); 
console.log(longDate("2023-01-21")); 
console.log(longDate("2022-11-01")); 
console.log(longDate("2023-12-16")); 
console.log(longDate("2020-06-06")); 
console.log(longDate("2023-08-30")); 

console.log(chalk.blue("Short dates:"));
console.log(shortDate("1999-25-09"));
console.log(shortDate("2007-27-11"));
console.log(shortDate("2021-21-04"));
console.log(shortDate("2024-02-06"));
console.log(shortDate("2024-02-11"));

console.log(chalk.bgBlue("Relative dates:"));
console.log(relativeDate("1979-10-04"));
console.log(relativeDate("2000-11-04"));
console.log(relativeDate("2025-01-04"));
console.log(relativeDate("1998-10-04"));
console.log(relativeDate("1989-10-04"));
