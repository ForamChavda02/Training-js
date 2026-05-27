//convert minute to seconds
let minute = 3;
console.log(minute * 60);

//area of triangle 
let base = 20;
let height = 10;
let area = 1/2 * base *height;
console.log("the area of trianle is: ", area);//the area of trianle is:  100

//create a function that takes voltage and current and returns the calculated power
let v = 220;
let i = 3;
let power = v * i;
console.log("power is:", power);//power is: 660

//create a function that finds the maximum range of a triangle's third edge
let edge1 = 8;
let edge2 = 10;
let a = edge1 + edge2;
let b = edge2 - edge1;
console.log(`third edge is between ${a} and ${b}`);//third edge is between 18 and 2

//create a function that takes length and width and finds the perimeter of rectangle
let length = 12;
let breadht = 8;
let perimeter = 2 * length + 2 * breadht;
console.log("perimeter of rectangle is:", perimeter);//perimeter of rectangle is: 40

//create a function that takes a number as an argument. add up all numbers from 1 to the number you passed to the function
let sum = 0;
function addUpto(num) {
    for(let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(addUpto(10));//55

//create a function that takes a number as an argument and returns the number of matchsticks to make house.
function matchHouse(step) {
    return 5 * (step) + 1;
}
console.log(matchHouse(4));//21

//number of squares in an N * N grid
//2 = 2 ^ 2 + 1, 3 = 3^2 + 5, 4 = 4^2 + 14
function gridCount(squares) {
    if(squares == 0 || squares == 1) {
        return squares;
    }
    else {
        let x = squares ** 2 + (gridCount(squares - 1));
        return x;
    }
}
console.log(gridCount(5));//55

//calculate series resistance
function calculateResistance(num1, num2, num3, num4) {
    return num1 + num2 + num3 + num4;
}
console.log("the resistance is:", calculateResistance(10, 20, 5, 30));//the resistance is: 65

//write a function that takes two-digit number and determines if it's the largest of two possible digit swaps
function digitSwap(num5) {
    let a = num5.toString().split("").reverse().join("");
    if(num5 >= a){
        return true;
    }
    else {
        return false;
    }
} 
console.log(digitSwap(99));//true

//a word is on the loose and now has tried to hide among a crowd of tall letters find the word
function detectWord(string) {
    let resultArr = [];
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== string[i].toUpperCase()) {
            resultArr.push(string[i]);
        }
    }
    let hiddenWord = resultArr.join("");
    return hiddenWord;
}
console.log(detectWord("UcUNFYGaFYFYGtNUH"));//cat

//You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.
function sortedDrinks(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].price > array[i + 1].price){
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
        return array;
    }
}
console.log(sortedDrinks([{name: "lime", price: 50}, {name: "lemonade", price: 10}]));

//Create a function that takes two arrays and insert the second array in the middle of the first array
function tuckArray(array1, array2) {
    let tempArray = [];
    let addArray = [1, 2, 3, 4, 5];
    tempArray.push(array1, addArray, array2);
    return tempArray;
}
console.log(tuckArray([10, 20], [6, 7 ,8 ,9]));//[ [ 10, 20 ], [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9 ] ]
