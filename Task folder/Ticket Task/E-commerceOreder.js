/*Task 1: E-commerce Order Analytics
//Input
const orders = [
{ id: 1, customer: "John", amount: 5000, status: "completed" },
{ id: 2, customer: "Alice", amount: 2000, status: "pending" },
{ id: 3, customer: "John", amount: 3000, status: "completed" },
{ id: 4, customer: "Bob", amount: 7000, status: "completed" }
];

Requirements
1)Find total revenue from completed orders.
2)Find top spending customer.
3)Get all completed orders.
4)Sort customers by total spending.
*/
const orders = [
{ id: 1, customer: "John", amount: 5000, status: "completed" },
{ id: 2, customer: "Alice", amount: 2000, status: "pending" },
{ id: 3, customer: "John", amount: 3000, status: "completed" },
{ id: 4, customer: "Bob", amount: 7000, status: "completed" }
];
let revenue = 0;
for(let i = 0; i < orders.length; i++) {
    if(orders[i].status == "completed") {
        revenue += orders[i].amount;
    }
}
console.log("revenue is:", revenue);//15000
let max = orders[0].amount;
for(let i = 1; i < orders.length; i++) {
    if(orders[i].amount > max) {
        max = orders[i].customer;
    }
}
console.log(max);//Bob

let completedArr = []
for(let i = 0; i < orders.length; i++) {
    if(orders[i].status == "completed") {
        completedArr.push(orders[i]);
    }
}
console.log(completedArr);
/*
[
  { id: 1, customer: 'John', amount: 5000, status: 'completed' },
  { id: 3, customer: 'John', amount: 3000, status: 'completed' },
  { id: 4, customer: 'Bob', amount: 7000, status: 'completed' }
]
*/

orders.sort((a, b) => a.amount - b.amount);
console.log(orders);
/*
[
  { id: 2, customer: 'Alice', amount: 2000, status: 'pending' },
  { id: 3, customer: 'John', amount: 3000, status: 'completed' },
  { id: 1, customer: 'John', amount: 5000, status: 'completed' },
  { id: 4, customer: 'Bob', amount: 7000, status: 'completed' }
]




/*
Task 2: Student Result Dashboard
Input
const students = [
{ name: "A", marks: [90, 80, 70] },
{ name: "B", marks: [60, 50, 40] },
{ name: "C", marks: [95, 90, 92] }
];
Requirements
Calculate average marks.
Assign grade.
Find topper.
Find failed students (<50%).
*/
const students = [
{ name: "A", marks: [90, 80, 70] },
{ name: "B", marks: [60, 50, 40] },
{ name: "C", marks: [95, 90, 92] }
];

//avg marks
let marksArr = [];
marksArr.push(students[0].marks.reduce((sum, mark) => (sum + mark) / 300 * 100, 0));
marksArr.push(students[1].marks.reduce((sum, mark) => (sum + mark) / 300 * 100, 0));
marksArr.push(students[2].marks.reduce((sum, mark) => (sum + mark) / 300 * 100, 0));
console.log(marksArr); //[ 35.55555555555555, 21.11111111111111, 44.18518518518518 ]

//garde assign
let gardeArr = [];
for(let i = 0; i < students.length; i++) {
    if(students[i].marks.reduce((sum, mark) => sum + mark, 0) >= 250) {
      gardeArr.push("A");  
    }
    else if(students[i].marks.reduce((sum, mark) => sum + mark, 0) >= 200) {
        gardeArr.push("B");
    }
    else if(students[i].marks.reduce((sum, mark) => sum + mark, 0) >= 150) {
        gardeArr.push("C");
    }
}
console.log(gardeArr);//[ 'B', 'C', 'A' ]

//find toper
let testArr = []
let test = 0;
for(let i = 0; i < students.length; i++) {
    test = students[i].marks.reduce((sum, mark) => sum + mark, 0);
    testArr.push(test);   
}
console.log("the highest marks is:", Math.max(...testArr));//the highest marks is: 277


//find failed student
for(let i = 0; i < marksArr.length; i++) {
    if(marksArr[i] < 50) {
        console.log(marksArr[i], "is failed");
    }
}
/*
35.55555555555555 is failed
21.111111111111107 is failed
44.18518518518518 is failed
*/




/*
Task 3: Stock Portfolio Tracker
Input
const portfolio = [
{
symbol: "TCS",
quantity: 10,
buyPrice: 3000,
currentPrice: 3500
},
{
symbol: "INFY",
quantity: 5,
buyPrice: 1500,
currentPrice: 1400
}
];
Requirements
Calculate investment amount.
Current portfolio value.
Profit/Loss per stock.
Overall return %.
*/
const portfolio = [
{
symbol: "TCS",
quantity: 10,
buyPrice: 3000,
currentPrice: 3500
},
{
symbol: "INFY",
quantity: 5,
buyPrice: 1500,
currentPrice: 1400
}
];
//Calculate investment amount.
console.log("investment of 1st:", portfolio[0].quantity * portfolio[0].buyPrice);//investment of 1st: 30000
console.log("investment of 2nd:", portfolio[1].quantity * portfolio[1].buyPrice);//investment of 2nd: 7500

//Current portfolio value.
console.log("current portfolio value of 1st is:", portfolio[0].currentPrice);//current portfolio value of 1st is: 3500
console.log("current portfolio value of 2nd is:", portfolio[1].currentPrice);//current portfolio value of 2nd is: 1400

//Profit/Loss per stock.
for(let i in portfolio) {
    if(portfolio[i].buyPrice > portfolio[i].currentPrice) {
        console.log(portfolio[i],"you have loss");
    }
    else {
        console.log(portfolio[i],"you have profit");
    }
}
//{ symbol: 'TCS', quantity: 10, buyPrice: 3000, currentPrice: 3500 } you have profit
//{ symbol: 'INFY', quantity: 5, buyPrice: 1500, currentPrice: 1400 } you have loss

//Overall return %.
for(let i in portfolio) {
    console.log("over all return is in %:", Math.abs(portfolio[i].currentPrice - portfolio[i].buyPrice) / portfolio[i].buyPrice * 100);
}
//over all return is in %: 16.666666666666664
//over all return is in %: 6.666666666666667



/*
Task 4 Transaction Analytics
Input
const transactions = [
{ type: "credit", amount: 5000 },
{ type: "debit", amount: 2000 },
{ type: "credit", amount: 3000 },
{ type: "debit", amount: 1000 }
];
Requirements
Total credits.
Total debits.
Net balance.
Transaction summary object.
Expected Output
{
totalCredit: 8000,
totalDebit: 3000,
balance: 5000
}
*/
const transactions = [
{ type: "credit", amount: 5000 },
{ type: "debit", amount: 2000 },
{ type: "credit", amount: 3000 },
{ type: "debit", amount: 1000 }
];

//total credit 
let expectedResult = {
    totalCredit: 0,
    totalDebit: 0,
    balance: 0
};
for(let i in transactions) {
    if(transactions[i].type == "credit") {
        expectedResult.totalCredit += Math.abs(transactions[i].amount);
    }
    else if(transactions[i].type == "debit") {
        expectedResult.totalDebit += Math.abs(transactions[i].amount);
    }
    expectedResult.balance = Math.abs(expectedResult.totalCredit - expectedResult.totalDebit);
}
console.log(expectedResult);//{ totalCredit: 8000, totalDebit: 3000, balance: 5000 }