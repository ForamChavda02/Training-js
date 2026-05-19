//check if number is positive, negative, zero
const a = -44;
if(a > 0) {
    console.log("positive");
}
else if(a == 0) {
    console.log("zero");
}
else {
    console.log("negative");//negative
}

//check whether a number is even or odd
const b = 22;
if(b % 2 == 0) {
    console.log("even number");//even number
}
else {
    console.log("odd");
}

//find the largest nummber among 3
const c = 10;
const d = 78;
const e = 6;
let max;
if(c > d) {
    max = a;
}
else if(d > e) {
    max = d;
}
else {
    max = e;
}
console.log(max);//78

//check if peasron is eligible to vote (18+)
const f = 52;
if(f > 18) {
    console.log("you can vote");//you can vote
}
else {
    console.log("you are child");
}

//check is the student pass or fail based on marks
const g = 33;
if(g >= 33) {
    console.log("pass");//pass
}
else {
    console.log("fail");
}

//assign grades A, B, C, D based on marks
const h = 97;
if(h > 90) {
    console.log("A : pass");//A : pass
}
else if(h > 80) {
    console.log("B : pass");
}
else if(h > 70) {
    console.log("C : pass");
}
else if(h > 60) {
    console.log("D : pass");
}
else {
    console.log("F : fail");
}

//check whether a year is leap or not
const i = 2026;
if(i % 4 == 0 || i % 400 == 0) {
    console.log("leap year");
}
else {
    console.log("not a leap year");//not a leap year
}

//check if character is consonent or vowel
const j = "A";
if("aeiouAEIOU".includes(j)){
    console.log("vowel");//vowel
}
else {
    console.log("consonent");
}

//check whether a number is divided by 5 and 11
const k = 55;
if(k % 5 == 0 && k % 11 == 0) {
    console.log("divided by both 5 and 11");//divided by both 5 and 11
}
else {
    console.log("not divided by 5 and 11");
}

//create a simple calculater using condition(+, -, *, /)
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("enter first number: ", function(num1) {
    rl.question("enetr operator (+,-,*,/):", function(operator) {
        rl.question("enter second number:", function(num2) {

            num1 = Number(num1);
            num2 = Number(num2);

            let answer;

            if(operator === "+") {
                answer = num1 + num2;
            }
            else if(operator === "-") {
                answer = num1 - num2;
            }
            else if(operator === "*") {
                answer = num1 * num2;
            }
            else if(operator === "/") {
                answer = num1 / num2;
            }
            else {
                console.log("invalid operator");
                rl.close();
                return;
            }
            console.log(answer);
            rl.close();
        });
    });
});

//check if the entered password is correct
const password = "hello1234";
const { read } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter your password:", function(str1){
    str1 = String(str1);
    if(password == str1){
        console.log("correct password");//enter your password:hello1234
                                        //correct password 
    }
    else {
        console.log("incorrect password");
    }
}); 

//determine if a pearson gets a dicount based on their age
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter your age:", function(num3) {
    num3 = Number(num3);
    if(num3 > 10) {
        console.log("kids have discount up to 30%");//enter your age:15
                                                    //kids have discount up to 30%
    }
    else if(num3 > 25) {
        console.log("you gyus have discount upto 40%");
    }
    else if(num3 > 50) {
        console.log("adult people have discount up to 50%");
    }
    else {
        console.log("not a valid number");
    }
});

//check if enterd number is between 1 to 100
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter your number: ", function(num4) {
    if (num4 >= 1 && num4 <= 100) {
        console.log("number is between 1 and 100");//enter your number: 45
                                                   //number is between 1 and 100
    }
    else {
        console.log("number is not in a valid range");
    }
});

//find whether a character is uppercase or lowercase
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter your letter: ", function(str2){
    if(str2 === str2.toUpperCase() && str2 !== str2.toLowerCase()){
        console.log("the letter is upercase");
    }
    else {
        console.log("lower case letter");//enter your letter: n
                                        //lower case letter

    }
});