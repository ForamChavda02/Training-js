const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('enter your operator (+, -, *, /):', (operator) => {
    console.log(`${operator}`);
    rl.close();
});