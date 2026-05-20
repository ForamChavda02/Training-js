//chcek if number is postive or negative
let a = -7;
let isPositive = a > 0;
console.log(isPositive);//false

//verify whether a peasron is eligible for vote
let b = 18;
let isEligible = b >= 18;
console.log(isEligible);//true

//check if a number is even or odd
let c = 87;
let isEven = (c % 2 === 0);
console.log(isEven);//false

//determine if a user is logged in or not
let isLoggedIn = false;

if(isLoggedIn) {
    console.log("hello you are already logged in ");
}
else {
    console.log("you have to login first");//you have to login first
}

//check if a password length is greater than 8 
let d = "hello123";
let isCorrect = (d.toString().length >= 8);
console.log(isCorrect);//true

//verify is two numbers are equal
let e = 30;
let f = 50;
let isVeified = (e === f);
console.log(isVeified);//false

//checked if a student passed or failed based on their marks
let g = 67;
let isPass = (g >= 33);
if(isPass) {
    console.log("you are pass");
}
else {
    console.log("you are fail");//you are pass
}

//determine whether a year is leap year or not
let year = 2026;
let isLeapYear = (year % 4 === 0 || year % 400 === 0);
if(isLeapYear) {
    console.log("it is leap year");
}
else {
    console.log("it is not a leap year");//it is not a leap year
}

//check if a string is empty
let h = "";
let isEmpty = (h.toString().length == 0);
if(isEmpty) {
    console.log("string is empty");//string is empty
}
else {
    console.log("string have some value");
}

//check if a number is between 1 and 100
let i = 78;
let checkNum = (i >= 0 && i <= 100);
console.log(checkNum);//true

//verify if an email contains @ 
let j = "abc@gmail.com";
let isValidEmail = (j.includes("@"));
console.log(isValidEmail);//true