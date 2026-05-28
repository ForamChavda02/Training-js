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
console.log(avgSpeed(30, 10, 30));