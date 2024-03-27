import inquirer from "inquirer";
let mybalance = 100000; //dollar
let mypincode = 1234; //
let pinAnswer = await inquirer.prompt([
    {
        name: "question1",
        message: "enter your pin code",
        type: "number"
    }
]);
if (pinAnswer.question1 === mypincode) {
    console.log("correct pin code");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operations",
            message: "please select option ",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fastcash"],
        }
    ]);
    if (operationAnswer.operations === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter the amount you want to withdraw ",
                type: "number",
            }
        ]);
        if (amountAnswer.amount < mybalance) {
            mybalance -= amountAnswer.amount;
            console.log("your remaining balance is:" + mybalance);
        }
        else {
            console.log("insuficiant balance");
        }
    }
    else if (operationAnswer.operations === "Check Balance") {
        console.log("your current balance is:" + mybalance);
    }
    else if (operationAnswer.operations === "Fastcash") {
        let fast = await inquirer.prompt([
            {
                name: "fast_option",
                message: "how much money you want to withdraw ",
                type: "list",
                choices: ["1000", "2000", "5000", "10000", "20000", "30000", "50000"],
            }
        ]);
        if (fast.fast_option === "1000") {
            mybalance -= fast.fast_option;
            console.log('your remaining balance is:' + mybalance);
        }
        if (fast.fast_option === "2000") {
            mybalance -= fast.fast_option;
            console.log("your remaining balance is: $ {mybalance}");
        }
        if (fast.fast_option === "5000") {
            mybalance -= fast.fast_option;
            console.log("your remaining balance is: $ {mybalance}");
        }
        if (fast.fast_option === "10000") {
            mybalance -= fast.fast_option;
            console.log("your remaining balance is: $ {mybalance}");
        }
        if (fast.fast_option === "20000") {
            mybalance -= fast.fast_option;
            console.log("your remaining balance is: $ {mybalance}");
        }
        if (fast.fast_option === "30000") {
            mybalance -= fast.fast_option;
            console.log("your remaining balance is: $ {mybalance}");
        }
        if (fast.fast_option === "50000") {
            mybalance -= fast.fast_option;
            console.log("your remaining balance is: $ {mybalance}");
        }
    }
}
else {
    console.log("incorrect your pin");
}
