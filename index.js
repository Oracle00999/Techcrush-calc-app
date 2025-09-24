import fs from "fs";
import chalk from "chalk";
import add from "./middleware/add.js";
import subtract from "./middleware/substract.js";
import divide from "./middleware/divide.js";
import multiply from "./middleware/multiplication.js";

const registrationNumber = "BD/2025/TC3/026";

console.log(chalk.blue(`Registration Number: ${registrationNumber}`));

const num1 = 20;
const num2 = 10;

console.log(chalk.green(`Addition: ${num1} + ${num2} = ${add(num1, num2)}`));
console.log(
  chalk.red(`Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}`)
);
console.log(
  chalk.yellow(`Division: ${num1} / ${num2} = ${divide(num1, num2)}`)
);
console.log(
  chalk.magenta(`Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}`)
);

const results = `
Results of Calculator:
Addition: ${num1} + ${num2} = ${add(num1, num2)}
Subtraction: ${num1} - ${num2} = ${subtract(num1, num2)}
Division: ${num1} / ${num2} = ${divide(num1, num2)}
Multiplication: ${num1} * ${num2} = ${multiply(num1, num2)}
`;

fs.writeFileSync("results.txt", results);
console.log(chalk.yellow("Results have been saved to results.txt"));
