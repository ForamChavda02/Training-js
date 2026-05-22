//Create a function to check if a number is prime.
let num1 = 5;
let p = Math.floor(num1 / 2);
function isPrime(num1) {
    for(let i = 0; i < p; i++){
        if(num1 % i == 0 ){
            return false;
        }
        else {
            return true;
        }
    }
}
console.log(isPrime());//true

//create a function to capitalize the first letter of a word
let str1 = "hii i am foram";
function toUpper(str1) {
    return str1.split(" ").map((value) => {
        return value[0].toUpperCase() + value.slice(1);
    }).join(" ");
}
console.log(toUpper(str1));//Hii I Am Foram

//remove duplicates from array
let arr1 = [1, 2, 3, 4, 1, 1];
let arr2 = [];
function uniqeArr() {
    for(let i = 0; i <= arr1.length; i++){
       if(! arr2.includes(arr1[i])){
          arr2.push(arr1[i]);
       }
    }
}
console.log(uniqeArr(arr2));

//write a function to count words in a sentence
let str2 = "this is javascript";
function countWords(str2) {
    let a = str2.split(" ");
    return a.length;
}
console.log(countWords(str2));//3

//Create a function that returns Fibonacci series up to n
let num2 = 10;
let arr4 = [0, 1];
function fibonacci(num2) {
    for(let i = 2; i <= num2; i++){
      arr4.push(arr4[i - 1] + arr4[i - 2]);
    }
    return arr4;
}
console.log(fibonacci(num2));
/*
[
   0, 1,  1,  2,  3,
   5, 8, 13, 21, 34,
  55
]*/

//Create a function to sort an array without using built-in sort.
let arr5 = [8, 9, 5, 7, 4, 1];
let temp;
function sortArr(arr5) {
    for(let i = 0; i <= arr5.length; i++) {
        for(let j = 0; j <= i; j++){
           if(arr5[i] > arr5[j]){
            temp = arr5[j];
            arr5[j] = arr5[i];
            arr5[i] = temp;
           }
        }
    }
    return arr5;
}
console.log(sortArr(arr5));//[ 9, 8, 7, 5, 4, 1 ]

//Write a function to find the second largest number in an array.
let arr6 = [41, 85, 1, 5, 84, 3];
let max = arr6[0];
let max2 = arr6[1];
function secondLatgest(arr6) {
    for(let i = 0; i <= arr6.length; i++) {
        if(arr6[i] > max){
            max2 = max;
            max = arr6[i]; 
        }
        else if(arr6[i] > max2) {
            max2 = arr6[i];
        }
    }
    return max2;
}
console.log(secondLatgest(arr6));//84

//create a function to check if string contains numbers
let str3 = "hello123";
function countNum(str3) {
    for(let i = 0; i < str3.length; i++) {
        let x = /\d/.test("str3");
        return x;   
    }
}
console.log(countNum(str3));//true

//Create a function to count uppercase and lowercase letters.
let str4 = "This is JaVaScript";
let countUpper = 0;
let countLower = 0;
function countUpperLower(str4) {
    for(let i = 0; i < str4.length; i++) {
        if(str4[i] >= "A" && str4[i] <= "Z") {
            countUpper ++;
        }
        else if(str4[i] >= "a" && str4[i] <= "z") {
            countLower ++;
        }
    }
     return [countUpper, countLower];
}
console.log(countUpperLower(str4));//[ 4, 12 ]
