#! /usr/bin/env node
import inquirer from "inquirer";
// initialize user balance pin and code
let myBalance = 5000;
let myPin = 4321;
// welcome machine
console.log("welcome to Majid ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Plz ENter your Pin Code"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("loggin successfully");
    let operations = await inquirer.prompt([
        {
            name: "check",
            type: "list",
            message: "select an operation",
            choices: ["withdraw amount", "check balance"]
        }
    ]);
    if (operations.check === "withdraw amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "enter amoount to withdraw"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw successfully`);
            console.log(`your current balance is ${myBalance}`);
        }
    }
    else if (operations.check === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
    else {
        console.log("plz enter valid pin");
    }
}
else {
    console.log("invalid pin");
}
