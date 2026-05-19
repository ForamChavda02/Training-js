//check if number is even or odd
const a = 55;
let b = a % 2 == 0 ? "even number" : "odd number";
console.log(b);//odd number

//check wether pearson is eligible for vote or not
const c = 65;
let d = c >= 18 ? "can vote" : "you are kid";
console.log(d);//can vote

//find greater number between two number
const e = 78;
const f = 90;
let g = e > f ? `first number is greater: ${e}` : `second number is greater: ${f}`;
console.log(g);//second number is greater: 90

//check if character is vowel or consonent
const h = "B";
let i = "aeiouAEIOU".includes(h) ? "vowel" : "consonent";
console.log(i);//consonent

//check whether a number is positive, negative or zero
const j = 0;
let k = j > 0 ? "positve number" : j === 0 ? "zero" : "negative number";
console.log(k);//zero

//check if student pass or fail based on their marks
const l = 33;
const m = l >= 33 ? "pass" : "fail";
console.log(m);// pass

//find largest among three using nested ternary
const n = 10;
const o = 67;
const p = 5;
let q = n > o ? `first number is greater ${n}` : o > p ? `second number is greter ${o}` : `third number is greater ${p}`;
console.log(q);//second number is greter 67

//check if age is child, teenage, adult
const r = 15;
let s = r > 0 && r< 13 ? "kid" : r > 13 && r < 18 ? "teenage" : "adult";
console.log(s); //teenage

//check whether a year is leap year or not
const t = 2020;
let u = t % 4 === 0 || t % 400 === 0 ? "leap year" : "not a leap year";
console.log(u);//leap year

//check if a character is uppercase or lowercase
const v = "b";
let w = v === v.toUpperCase() || v !== v.toLowerCase() ? "upercase" : "lowercase";
console.log(w);//lowercase

//find  minimum between two numbers
const x = 20;
const y = 30;
let z = x > y ? `minimum number is ${y}` : `minimum number is ${x}`;
console.log(z);//minimum number is 20

//check if a string is empty or not
const A = "";
let B = A.toString() === "" ? "empty string" : "string have some value";
console.log(B);//empty string

//garde calculator
const C = 45;
let D = C >= 90 && C <= 100 ? "you got A" : C >= 80 && C <= 89 ? "you got B" : C >= 70 && C <= 79 ? "you got C grade" : C >= 60 && C <= 69 ? "you got D" : C >= 50 && C <= 59 ? "you got E" : "you are fail"; 
console.log(D);//you are fail

//tarfic signal 
const E = "green";
let F = E.toString() == "red" ? "stop" : E.toString() == "yellow" ? "be ready" : "you can go";
console.log(F);//you can go