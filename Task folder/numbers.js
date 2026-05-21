//build a calculator: use toFixed() to show prices with 2 decimal places.
let num1 = 20;
let num2 = 10;
let operator = "/"
if(operator == "/") {
    let a = num1 / num2;
    console.log(a.toFixed(2));//2.00
}
else if(operator == "*") {
    let b = num1 * num2;
    console.log(b.toFixed(2));
}
else if(operator == "+") {
    let c = num1 + num2;
    console.log(c.toFixed(2));
}
else if(operator == "-") {
    let d = num1 - num2;
    console.log(d.toFixed(2));
}
else {
    console.log("not a valid operator");
}

//create a scientific number formatter: display very large number using toExponential()
let num3 = 6.6666;
let e = num3.toExponential(6);
console.log(e);//6.666600e+0

//build a marks percentage formatter: limit the total percentage using toPercision()
let marks1 = 95;
let marks2 = 78;
let marks3 = 89;
let marks4 = 96;
let percentage = ((marks1 + marks2 + marks3 + marks4) * 100 ) / 400 ;
console.log(percentage.toPrecision(3));//89.5
