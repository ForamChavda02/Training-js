//Create a function to move all zeroes to end of array without changing order of other elements.
let arr1 = [0, 1, 2, 3, 0, 4, 0];
function zeroAtEnd(arr1) {
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] == 0) {
            arr1.unshift(arr1.pop());
        }
    }
    return arr1;
}
console.log(zeroAtEnd(arr1));

//Create a function to rotate array by k positions.
let arr2 = [1, 2, 3, 4, 5];
let k = 3;
function rotate(arr2) {
    for(let i = 0; i < k; i++) {
        arr2.unshift(arr2.pop());
    }
    return arr2;
}
console.log(rotate(arr2));//[ 3, 4, 5, 1, 2 ]

//Create a function to find missing number from array of 1 to n.
let arr3 = [1, 2, 3, 6, 8];
let resArr = [];
function missingNum(arr3) {
    for(let i = 0; i < arr3.length; i++) {
        if(arr3[i + 1] - arr3[i] !== 1) {
            return resArr.push(arr3[i]);
        }
    }
}
console.log(missingNum(arr3));

//Create a function to find pair of elements whose sum equals target
let arr4 = [1, 4, 3, 2, 5, 0];
let target = 5;
function targetSum(arr4) {
    for(let i = 0; i < arr4.length; i++) {
        if(arr4[i] + arr4[i + 1] == 5) {
            return [arr4[i], arr4[i + 1]];
        }
    }
}
console.log(targetSum(arr4));//[ 1, 4 ]

//Create a function to group even and odd numbers separately.
let arr5 = [1, 2, 3, 4, 5, 6];
let resultArr1 = [];
let resultArr2 = [];
function groupSeprate(arr5) {
    for(let i = 0; i < arr5.length; i++) {
        if(arr5[i] % 2 == 0) {
            resultArr1.push(arr5[i]);
        }
        else {
            resultArr2.push(arr5[i]);
        }
    }
    return [resultArr1, resultArr2];
}
console.log(groupSeprate(arr5));//[ [ 2, 4, 6 ], [ 1, 3, 5 ] ]

//Create a function to find longest word from array of strings.
let arr6 = ["hello", "world", "javascript"];
function largestWord(arr6) {
   return Math.max(arr6[0].length, arr6[1].length, arr6[2].length);
}
console.log(largestWord(arr6));//10

//Create a function that checks if a given number exists in an array using indexOf() and return its position. Use a loop to print "Found" or "Not Found".
let arr7 = [1, 7, 9, 5, 8, 3];
let aim = 3;
function findElement(arr7) {
    for(let i = 0; i < arr7.length; i++) {
        if(arr7[i] == aim) {
            let x = arr7.indexOf(arr7[i]);
            return x;
        }
    }
    return false;
}
console.log(findElement(arr7));//5

//Create a function that finds the last occurrence of a number in an array using lastIndexOf() and print the index using a loop.
let arr8 = [1, 2, 1, 7, 1];
let aim2 = arr8.lastIndexOf(1);
function findLast(arr8) {
    for(let i = 0; i < arr8.length; i++) {
        if(i == aim2) {
            return i;
        }
    }
    return false;
}
console.log(findLast(arr8));//4

//Create a function that finds the first even number in an array using find()
let arr9 = [1, 4, 7, 8, 9];
let first = arr9.find(findEven);

function findEven(value, index, arr9) {
    return value % 2 == 0;
}
console.log(first);//4

//Create a function that finds the index of the first negative number using findIndex()
let arr10 = [2, 3, 4, -6, 7];
let firstNegative = arr10.findIndex(findNegative);

function findNegative(value, index, arr10) {
    return value < 0;
}
console.log(firstNegative);//3

//Create a function that finds the last even number in an array using findLast().
let arr11 = [1, 3, 2, 4, 5, 8];
let lastEven = arr11.findLast(findLastEven);

function findLastEven(value, index, arr11) {
    return value % 2 == 0;
}
console.log(lastEven);//8

//Create a function that finds the index of the last string starting with "a" using findLastIndex().
let arr12 = ["hello", "apple", "this", "aryan"];
let lastStr = arr12.findLastIndex(findString);

function findString(value, index, arr12) {
    return value.startsWith("a");
}
console.log(lastStr);//3

//Create a function that prints only even numbers using forEach().
let arr13 = [1, 4, 7, 9, 6, 8, 10];
let tempArr = [];
arr13.forEach(onlyEven);

function onlyEven(value, index, arr13) {
    if(value % 2 == 0) {
        tempArr.push(value);
    }
}
console.log(tempArr);//[ 4, 6, 8, 10 ]

//Create a function that counts how many words are longer than 5 characters using forEach()
let arr14 = ["hello", "javascript", "programing"];
let tempArr2 = [];
arr14.forEach(longerthanFive);

function longerthanFive(value, index, arr14) {
    if(value.length > 5) {
        tempArr2.push(value);
    }
}
console.log(tempArr2.length);//2

//Create a function that prints multiplication table of each number in an array using forEach().
let arr15 = [2, 3, 6, 7];
let tempArr3 = [];
arr15.forEach(multiplicationForAll);

function multiplicationForAll(value, index, arr15) {
    for(let i = 1; i < 11; i++) {
        let x = value * i;
        tempArr3.push(x);
    }
}
console.log(tempArr3);
/*[
  2,  4,  6,  8, 10, 12, 14, 16, 18, 20,
  3,  6,  9, 12, 15, 18, 21, 24, 27, 30,
  6, 12, 18, 24, 30, 36, 42, 48, 54, 60,
  7, 14, 21, 28, 35, 42, 49, 56, 63, 70
] */

//Create a function that converts an array of prices into discounted prices (10% off).
let arr16 = [100, 300, 700, 670];
let discountPrices = [];
arr16.map(discountFun);

function discountFun(value, index, arr16) {
    let x = value - ((10/100) * value);
    discountPrices.push(x);
}
console.log(discountPrices);//[ 90, 270, 630, 603 ]
//using arrow function
console.log(arr16.map(x => x - ((10/100) * x)));//[ 90, 270, 630, 603 ]

//Create a function that splits words into characters using flatMap().
let arr17 = ["hello", "javascript"];
console.log(arr17.flatMap(value => value.split("")));
/*[
  'h', 'e', 'l', 'l',
  'o', 'j', 'a', 'v',
  'a', 's', 'c', 'r',
  'i', 'p', 't'
]*/

//Create a function that doubles numbers and flattens them.
let arr18 = [2, 3, 4, 5, 6];
console.log(arr18.flatMap(value =>[value, value * 2]));
/*[
  2, 4,  3, 6,  4,
  8, 5, 10, 6, 12
]*/

//Create a function that returns words longer than 4 letters.
let arr19 = ["hello", "hii", "foram"];
console.log(arr19.filter(x => x.length > 4));//[ 'hello', 'foram' ]

//removes falsy values
let arr20 = [0, "", null, "foram", "2"];
console.log(arr20.filter(Boolean));//[ 'foram', '2' ]

//Create a function that finds sum of numbers.
let arr21 = [20, 30, 40, 50, 90];
console.log(arr21.reduce(value => value += value));//320

//Create a function that converts array into one sentence
let arr22 = ["hello", "this", "is", "javascript"];
let reduceSentence = arr22.reduce(funReduce);

function funReduce(total, value) {
    let x = total + " " + value;
    return x;
}
console.log(reduceSentence);//hello this is javascript

//Create a function that joins words from right to left
let reduceRightsentance = arr22.reduceRight(funReduceRight); 

function funReduceRight(total, value) {
    let x = total + " " + value;
    return x;
}
console.log(reduceRightsentance);//javascript is this hello

//Create a function that reverses an array using reduceRight()
let reversesArrRight = arr22.reduceRight(reverseArr, []);

function reverseArr(total, value, index, arr22) {
    total.push(value);
    return total;
}
console.log(reversesArrRight);//[ 'javascript', 'is', 'this', 'hello' ]
