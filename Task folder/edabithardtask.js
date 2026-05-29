//seven boom
//create a function that takes an array of numbers and return "boom!" if the digit 7 appears in the array.otherwise return "there is no 7 in the array"
function sevenBoom(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == 7) {
            return "boom!";
        }
    }
    return "no 7 in array";
}
console.log(sevenBoom([1, 5, 6, 7]));//boom!

//tower of hanoi
//create a function that takes a number discs as an argument and return the minimum amount of steps needed to complete the game
function toweofHanoi(discs) {
    return 2 ** discs - 1;
}
console.log(toweofHanoi(5));//31

//numners of boomeranges
//create a function that returns the total numbers of boomernages in array
function countBoomeranges(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] == array[i+2] && array[i] != array[i + 1]) {
            count ++;
        }
    }
    return count;
}
console.log(countBoomeranges([1, 7, 1, 7, 1, 7, 1]));//5

//oddish vs evenish 
//create a function that determines whether a number is oddish or evenish.a number is oddish if the sum of all its digits is odd, and if even then number is evenish
function oddishOrevenish(num) {
    let sum = 0;
    let x = num.toString().split("");
    for(let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    if(sum % 2 == 0) {
        return "number is evenish";
    }
    else {
        return "number is oddish";
    }
}
console.log(oddishOrevenish(55));//number is oddish

//how many days between two dates
//create a function that takes two dates and return the number of days between the first date and second date
function getDays(date1, date2) {
    let days = 0;
    if(date1.getTime() == date2.getTime()) {
        return days;
    }
    else {
        days = Math.abs((date1.getTime() - date2.getTime()) / 86400000);
        return days;
    }
}
console.log(getDays(new Date("December 29, 2018"),
  new Date("January 1, 2019")));//3

//length of nested array
function getLength(array) {
    let resultArr = array.flat(Infinity);
    return resultArr.length;
}
console.log(getLength([1, [2, [3, [4, [5, 6]]]]]));

//plant trees
//plant a tree with using width of land w, length of the land l, gap between the trees g. in output give number of trees which can be plant
//function plantTrees(w, l, g) {
    //if(g == 0) {
      //  return w * l - 1;
    //}
    //else {
    //    return w + l - g - 1;
  //  } 
//} 
//console.log(plantTrees(100, 100, 0));

//alnbum in albumns
//you have an object with years 2015-2020 as keys and some albums related for each year as key values.write a function that takes an album and return the year in which it was
function releaseYear(string) {
    const obj = {
        "ode to joy": 2019,
        "honeymoon": 2015,
        "made in the a.m.": 2015,
        "lemonade": 2016,
        "views": 2016,
        "ANTI": 2016 
    };
    for(let [key, value] of Object.entries(obj)) {
        if(key == string) {
            return value;
        }
        else {
            return "unknown!";
        }
    }
} 
console.log(releaseYear("ode to joy"));//2019

//numbers in strings
//retutn a string of array which includes number
function numInStr(array) {
    let resultArr = [];
    for(let i = 0; i < array.length; i++) {
        if(/\d/.test(array[i])) {
            resultArr.push(array[i]);
        }
    }
    return resultArr;
}
console.log(numInStr(["1a", "a", "2b", "b"]));//[ '1a', '2b' ]

//combinations
function combinations(...args) {
    console.log(args.length);
    return args.reduce((comb, value) => comb *value);
}
console.log(combinations(2, 3, 4, 5));//120

//postive dominant
//an array is positive dominant if it contains strictly more unique positive values than unique negative values.write a function that returns true if an array is positive dominant
function isPositiveDominant(array) {
    let uniqueArr = [...new Set(array)];
    let positiveCount = 0;
    let negativeCount = 0;
    for(let num of uniqueArr) {
        if(num >= 0) {
            positiveCount ++;
        }
        else {
            negativeCount++;
        }
    }
    return positiveCount > negativeCount;
}
console.log(isPositiveDominant([5, 99, 832, -3, -4]));//true

//case index converter
//write a function that takes a string input and returns in reverse case order.
function invert(string) {
    let resultArr = string.split("").reverse();
    let resultStr = [];
    for(let x of resultArr) {
        if(x == x.toUpperCase()) {
            resultStr.push(x.toLowerCase());
        }
        else {
            resultStr.push(x.toUpperCase());
        }
    }
    return resultStr.join("");
}
console.log(invert("dLROW YM sI HsEt"));//TeSh iS my worlD

//anonymous function all the way down
//create a function which takes a parameter n and returns a function such that it, when called n times, returns the string "edabit"
function lamndaDepth(num) {
    if(num == 0) {
        return "hello";
    }
    function kDepth(num2) {
        return "hello";
    }
 return kDepth;
} 
let anotherCall = lamndaDepth(10);
console.log(anotherCall(2));
console.log(typeof lamndaDepth);
//hello
//function

//calculate the total price of groceries
//create a function that takes an array of objetcts(groceries) which calculates total price and return it as number.a grocery object has a product, a quantity and price
function getTotalPrice(array) {
   let total = 0;
   for(let obj of array) {
    let values = Object.values(obj);
    total += values[1] * values[2];
   }
   return total;
}
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]));//10.4

//convert camel case to snake_case
function camelToSnake(string) {
    let array = string.split("");
    let resultArr = [];
    for(let i of array) {
        if(i == i.toUpperCase()) {
            resultArr.push("_");
            resultArr.push(i.toLowerCase());
        }
        else {
            resultArr.push(i);
        }
    }
    return resultArr.join("");
}
console.log(camelToSnake("greatApples for aSmellyRhino"));//great_apples_ for_ a_smelly_rhino

//reverse the odd lenght words
//given a string, reverse all the words which have odd length.the even lenght words are not changed
function reverseOdd(string) {
    let array = string.split(" ");
    let resultArr = [];
    if(array.length == 1 || array.length == 0) {
        if(array.length % 2 == 0) {
            return array.toString();
        }
        else {
            return array.toString().reverse().join("");
        }
    }
    else {
        for(let x of array) {
            if(x.length % 2 == 0) {
                resultArr.push(x);
            }
            else {
                resultArr.push(x.split("").reverse().join(""));
            }
        }
    }
    return resultArr.join(" ");
}
console.log(reverseOdd("One two three four"));//enO owt eerht four

//pandigital numbers 
//a pandigital numbers contains all digits (0-9) at least once
function isPandigital(num) {
    let uniqueArr = [...new Set(num.toString().split("").sort())];
    let testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    return uniqueArr.join("") == testArr.join("");
}
console.log(isPandigital(90864523148909));//false

//up the hill, down the hill
//avg speed : speed = distance/time what is avg speed is total distance/total time distance is same 2x for time 18/60 , distance = speed x time = 20 x 18/60
function avgSpeed(t, Su, Sd) {
   let distance = Su * (t / 60);
   let t2 = distance / Sd;
   return (2 * distance) / ((t / 60) + t2);
}
console.log(avgSpeed(30, 10, 30));//15

//is the number prime with a twist
function prime(num) {
    let x = BigInt(num) / 2n;
    for(let i = 2; i < x; i++) {
        if(x % BigInt(i) == 0) {
            return false
        }
        else {
            return true
        }
    }
}
console.log(prime(9223372036854775808));//false

//check if brick fits through the hole
//write a function that takes three dimensions of brick: height(a), width(b) and depth(c) and return true if this brick can fit into a hole with the width(w) and height(h).
function doesBrickfit(a, b, c, d, e) {
    let wholeArr = [d, e];
    let testArr1 = [a, b];
    let testArr2 = [b, c];
    let testArr3 = [a, c];
    if(wholeArr[0] >= testArr1[0] && wholeArr[1] >= testArr1[1]) {
        return true;
    }
    else if(wholeArr[0] >= testArr2[0] && wholeArr[1] >= testArr2[1]) {
        return true;
    }
    else if(wholeArr[0] >= testArr3[0] && wholeArr[1] >= testArr3[1]) {
        return true;
    }
    else {
        return false;
    }
}
console.log(doesBrickfit(1, 1, 1, 1, 1));//true

//layers in rug 
//write a function that count how many concentric layers a rug has
function countLayers(array) {
   let uniqueArr = [];
   for(let x of array) {
    if(!uniqueArr.includes(x)) {
        uniqueArr.push(x);
    }
   }
   return uniqueArr.length;
}
console.log(countLayers([
    "AAAAAAAAAAA",
  "AABBBBBBBAA",
  "AABCCCCCBAA",
  "AABCAAACBAA",
  "AABCADACBAA",
  "AABCAAACBAA",
  "AABCCCCCBAA",
  "AABBBBBBBAA",
  "AAAAAAAAAAA"
]));//5

//sales by match
//create a function that returns an integer represnting the number of matching pairs of socks that are available
function test(array) {
    let repeatedEle = array.filter((item, index) => {
        let count = array
            .slice(0, index + 1)
            .filter(x => x === item).length;

        return count % 2 == 0;
    });

    return repeatedEle.length;
}
console.log(test([50, 20, 30, 90, 30, 20, 50, 20, 90]));//4

//a simple pair 
function simplePair(array, num) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] * array[i + 1] == num) {
            return [array[i], array[i + 1]];
        }
        else if(array[i + 1] * array[i + 2] == num) {
            return [array[i + 1], array[i + 2]];
        }
        else if(array[i] * array[i + 2] == num) {
            return [array[i], array[i + 2]];
        }
        else {
            return null;
        }
    }
}
console.log(simplePair([1, 2, 3], 6));//[ 2, 3 ]

//switching beween pencils
function color_pattern_times(array) {
    let uniqueArr = [...new Set(array)];
    let time1 = 2 * array.length;
    let time2 = 1 * (uniqueArr.length - 1);
    return time1 + time2;
}
console.log(color_pattern_times(["Blue", "Blue", "Blue", "Red", "Red", "Red"]));//13

//christmas tree
//write a function to create a Christmas tree based on height h
function tree(h) {
    let pattern = "";
for (let i = 1; i <= h; i++) {
  for (let j = 1; j <= h - i; j++) {
    pattern += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    pattern += "*";
  }
  pattern += "\n";
}
    return pattern;
}
console.log(tree(5));
/* 
  *
   ***
  *****
 *******
*********
*/

//LCM of two numbers
//write a function that returns the least common multiple(LCM) of two integers
function lcm(num1, num2) {
    //lcm is the smallest integer such that it is divided by zero 
    if(num1 > num2) {
        for(let i = 2; i < num1; i++) {
        if(num1 % i == 0 && num2 % i == 0) {
            return i;
        }
        else {
            return num1 * num2;
        }
    }
    }  
    else {
        for(let i = 2; i < num2; i++) {
        if(num1 % i == 0 && num2 % i == 0) {
            return i;
        }
        else {
            return num1 * num2;
        }
    }
    }
    
}
console.log(lcm(8, 5));//40

//replace * with vowels
function uncensor(str1, str2) {
    let str1Arr = str1.split("");
    let str2Arr = str2.split("");
    for(let i = 0; i<str1Arr.length; i++) {
        if(str1Arr[i] == "*") {
            str1Arr[i] = str2Arr[0];
            str2Arr.shift();
        }
    }
    return str1Arr.join("");
}
console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));//Where did my vowels go?

//burglary series(12): get vodka bottle
function getVodka(obj, num) {
    let testArr = Object.entries(obj).slice(1).flat();
    for(let i in testArr) {
        if(testArr[i] == num) {
            return testArr[i - 1];
        }
    }
}
console.log(getVodka({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 50));//Rammstein B

//converting one binary string into another
//write a function that returns the minimum number of swaps to convert the first binary string into the second
function minSwap(num1, num2) {
    let num2Arr = num2.split("");
    let count = 0;
    for(let i = 0; i < num1.length; i++) {
        if(num1[i] !== num2Arr[i]) {
            for(let j = i + 1; j < num1.length; j++) {
                if(
                    num2Arr[j] === num1[i] &&
                    num1[j] === num2Arr[i]
                ) {
                    [num2Arr[i], num2Arr[j]] =
                    [num2Arr[j], num2Arr[i]];
                    count++;
                    break;
                }
            }
        }
    }
    return count;
}
console.log(minSwap("110011", "010111"));//1

//white spaces between lower and uppercase lettes
function insertWhitespace(str) {
    let resultArr = [];
    for(let x of str.split("")) {
        if(x == x.toUpperCase()) {
            resultArr.push(" ");
            resultArr.push(x);
        }
        else {
            resultArr.push(x);
        }
    }
    return resultArr.join("");
}
console.log(insertWhitespace("SheWalksToTheBeach"));