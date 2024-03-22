#! /usr/bin/env node

import inquirer from "inquirer"
let answer = await inquirer.prompt([{
    msg: "write your first number",
    type : "number",
    name : "firstNumber"},
{
    msg: "write your second number",
    type : "number",
    name : "secondNumber"},

{
    msg: "select your operator",
    type : "list",
    name : "operator"
    choices : ["addition","subtraction","multiplication","division","exponential","modulus"]
},])

if(answer.operator === "addition"){
    console.log(answer.firstNumber + answer.secondNumber)
} else if(answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber)
} else if(answer.operator === "multiple"){
    console.log(answer.firstNumber * answer.secondNumber)
} else if(answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber)
} else if(answer.operator === "modulus"){
    console.log(answer.firstNumber % answer.secondNumber)
} else if(answer.operator === "exponential"){
    console.log(answer.firstNumber ** answer.secondNumber)
}