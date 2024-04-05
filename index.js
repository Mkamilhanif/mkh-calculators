#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Entre first number", type: "number", name: "firstNumber" },
    { message: "Entre second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform action",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "multiplication", "division"]
    },
]);
if (answer.operators === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operators === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operators === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operators === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
