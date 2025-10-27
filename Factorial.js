// let MF = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];    // Factorial of 10 

// const red = (a, b) => {
//     return a * b
// };

// console.log(MF.reduce(red));

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    if (n < 0) return "INVALID, there is no 🚫🚫❌ Factorial for Negative numbers"
    if (n === 0 || n === 1) return 1;
    return Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a * b);
}
rl.question("Enter the number for which you want to see the FACTORIAL: ", (input) => {
    const num = parseInt(input);

    if (isNaN(num)) {
        console.log("Invalid input! Please enter a valid number.")
    } else {
        const result = factorial(num);
        console.log(`Factorial of ${num} is: ${result}`);

    }
    // It is optional, but looks sexy 
    const badge = num < 5 ? "🟢 Rookie Maths Smith" :
        num < 10 ? "🟡 Pro Factorizer" :
            "🔴 Saga Level: Math Overlord";
    console.log(`You earned a ${badge}`);
    
    
    
    rl.close();


});