/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
let random = Math.random();
let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
};

console.log(random);

if (random > 0.1) {
    // Perform correct calculation when probability is greater than 0.1
    let result = eval(`${a} ${c} ${b}`);
    console.log(`The result is ${a} ${c} ${b}`);
    alert(`The result is ${result}`);
} else {
    // Perform incorrect calculation when probability is less than or equal to 0.1
    let incorrectOp = obj[c];
    let result = eval(`${a} ${incorrectOp} ${b}`);
    console.log(`The result is ${a} ${incorrectOp} ${b}`);
    alert(`The result is ${result}`);
}
