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
let completedArr = []
for(let i in orders) {
    if(orders[i].status == "completed") {
        revenue += orders[i].amount;
        completedArr.push(orders[i]);
    }
}
console.log("revenue is:", revenue);//15000
console.log(completedArr);
/*
[
  { id: 1, customer: 'John', amount: 5000, status: 'completed' },
  { id: 3, customer: 'John', amount: 3000, status: 'completed' },
  { id: 4, customer: 'Bob', amount: 7000, status: 'completed' }
]
*/

let max = orders[0].amount;
for(let i = 1; i < orders.length; i++) {
    if(orders[i].amount > max) {
        max = orders[i].customer;
    }
}
console.log(max);//Bob

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
for(let i in students) {
    marksArr.push(students[i].marks.reduce((sum, mark) => (sum + mark) / 300 * 100, 0));
}
console.log(marksArr); //[ 35.55555555555555, 21.11111111111111, 44.18518518518518 ]

//garde assign
for(let i in students) {
    if(students[i].marks.reduce((sum, mark) => sum + mark, 0) >= 250) {
      students[i].grade = "Outstanding";  
    }
    else if(students[i].marks.reduce((sum, mark) => sum + mark, 0) >= 200) {
        students[i].grade = "firstclass";
    }
    else if(students[i].marks.reduce((sum, mark) => sum + mark, 0) >= 150) {
        students[i].grade = "secondclass";
    }
}
console.log(students);
/* 
[
  { name: 'A', marks: [ 90, 80, 70 ], grade: 'firstclass' },
  { name: 'B', marks: [ 60, 50, 40 ], grade: 'secondclass' },
  { name: 'C', marks: [ 95, 90, 92 ], grade: 'Outstanding' }
]
*/

//find toper
console.log("the highest marks is:", Math.max(...marksArr));//the highest marks is: 44.18518518518518


//find failed student
for(let i in students) {
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
let totalInvestment = 0;
let currentPortfolioValue = 0;
for(let i in portfolio) {
    totalInvestment += portfolio[i].quantity * portfolio[i].buyPrice;
    currentPortfolioValue += portfolio[i].currentPrice
}
console.log("total investment is:", totalInvestment);//total investment is: 37500
console.log("current portfolio value is:", currentPortfolioValue);//current portfolio value is: 4900

//Profit/Loss per stock.
for(let i in portfolio) {
    portfolio[i].gotReturn = Math.abs(portfolio[i].currentPrice - portfolio[i].buyPrice) / portfolio[i].buyPrice * 100;

    if(portfolio[i].buyPrice > portfolio[i].currentPrice) {
        portfolio[i].loss = "you have loss";
    }
    else {
        portfolio[i].porofit = "you have profit";
    }
}
console.log(portfolio);
/*
[
  {
    symbol: 'TCS',
    quantity: 10,
    buyPrice: 3000,
    currentPrice: 3500,
    gotReturn: 16.666666666666664,
    porofit: 'you have profit'
  },
  {
    symbol: 'INFY',
    quantity: 5,
    buyPrice: 1500,
    currentPrice: 1400,
    gotReturn: 6.666666666666667,
    loss: 'you have loss'
  }
]
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