//disarium number
//a number is said to be Disarium if the sum of its digits are raised to their respective postions is the number itself
function isDisarium(num) {
    let testArr = num.toString().split("");
    let answer = testArr.map((value, index) => value ** (index + 1)).reduce((total, n) => total + n, 0);
    return num == answer;
}
console.log(isDisarium(135));//true

//one plus one: create a function that outputs the result of a math expression in words
function wordMath(str) {
    const numbers = {
        Zero: 0,
        One: 1,
        Two: 2
    }
    let answer;
    let strArr = str.split(" ");
    if(strArr[1] == "plus") {
        answer = numbers[strArr[0]] + numbers[strArr[2]]; 
    }
    else {
        answer = numbers[strArr[0]] - numbers[strArr[2]];
    }
    return Object.keys(numbers).find(key => numbers[key] == answer);
}
console.log(wordMath("One plus One"));//Two

//vowel to vowel links
//given a sentence as str, return true if any two adjcent words have property: one word ends with vowel, while the word immediatlye after begains with a vowel
function vowelLinks(str) {
    let strArr = str.split(" ");
    let smallArr = strArr.at(-1).split("");
    let secondSamllArr = strArr.at(-2).split("");
    if("aeiou".includes(secondSamllArr.at(-1).toString()) && "aeiou".includes(smallArr[0].toString())) {
        return true;
    }
    else {
        return false;
    }
}
console.log(vowelLinks("a very large appliance"));//true

//pluralize
//give a list of words in the singular form, return a set of words in the plural form if they appear more than once in the list
function pluralize(array) {
    let resultArr = [];
    for (let x of array) {
        if (!resultArr.includes(x) && !resultArr.includes(x + "s")) {
            let repeated = array.filter(item => item == x);
            if (repeated.length > 1) {
                resultArr.push(x + "s");
            } else {
                resultArr.push(x);
            }
        }
    }
    return resultArr;
}
console.log(pluralize(["cow", "pig", "cow", "cow"]));//[ 'cows', 'pig' ]

//concate from target array
function canConcatenate(array, targetArr) {
    let testArr = array[0].concat(array[1]).sort();
    if(testArr.length !== targetArr.length) {
        return false;
    }
    else {
        for(let i in targetArr.sort()) {
        if(targetArr[i] !== testArr[i]) {
            return false;
        }
    }
    return true;
    }
}
console.log(canConcatenate([[2, 1, 3], [5, 4, 7]], [1, 2, 3, 4, 5, 6, 7]));//false

//add the values of the symbol in a matrix
function checkScore(array) {
    const obj = {
        "#": 5,
        "O": 3,
        "X": 1,
        "!": -1,
        "!!": -3,
        "!!!": -5
    };
    let result = 0;
    let resultArr = array.flat();
    for(let i = 0; i < resultArr.length; i++) {
        for(let [key, value] of Object.entries(obj)) {
            if(resultArr[i] == key) {
                result += value;
            }
        }
    }
    if(result > 0) {
        return result;
    }
    else {
        return 0;
    }
}
console.log(checkScore([["#", "O", "#", "!!", "X", "!!", "#", "O", "O", "!!", "#", "X", "#", "O"],
  ["!!!", "!!!", "!!", "!!", "!", "!", "X", "!", "!!!", "O", "!", "!!!", "X", "#"],
  ["#", "X", "#", "!!!", "!", "!!", "#", "#", "!!", "X", "!!", "!!!", "X", "O"],
  ["!!", "X", "!!", "!!", "!!!", "#", "O", "O", "!!!", "#", "O", "O", "#", "!!"],
  ["O", "X", "#", "!", "!", "X", "!!!", "O", "!!!", "!!", "O", "!", "O", "X"],
  ["!!", "!!!", "X", "!!!", "!!", "!!", "!!!", "X", "O", "!", "#", "!!", "!!", "!!!"],
  ["!!", "!!", "#", "O", "!", "!!", "!", "!!!", "#", "O", "#", "!", "#", "!!"],
  ["X", "X", "O", "X", "!!!", "#", "!!!", "!!!", "X", "X", "X", "!", "#", "!!"],
  ["O", "!!!", "!", "O", "#", "!", "!", "#", "X", "X", "#", "O", "!!", "!"],
  ["X", "!", "!!", "#", "#", "X", "!!", "O", "!!", "X", "X", "!!", "#", "X"],
  ["!", "!!", "!!", "O", "!!", "!!", "#", "#", "!", "!!!", "O", "!", "#", "#"],
  ["!", "!!!", "!!", "X", "!!", "!!", "#", "!!!", "O", "!!", "!!!", "!", "!", "!"],
  ["!!!", "!!!", "!!", "O", "!", "!", "!!!", "!!!", "!!", "!!", "X", "!", "#", "#"],
  ["O", "O", "#", "O", "#", "!", "!!!", "X", "X", "O", "!", "!!!", "X", "O"]]));//12

//burglary series(15): Number of Occurrences
function numberOfOccurrences(obj) {
    let objArr = Object.values(obj);
    let answer = {};
    objArr.forEach(element => {
        answer[element] = (answer[element] || 0) + 1;
    });
    return answer;
}
console.log(numberOfOccurrences({
  a: "moron",
  b: "scumbag",
  c: "moron",
  d: "idiot",
  e: "idiot"
}));//{ moron: 2, scumbag: 1, idiot: 2 }

//count the lone ones
//create a function which counts how many lone 1s appear in a given number.lone means the number doesn't appear twice or more in a row.
function countLoneOnes(num) {
    let testArr = num.toString().split("");
    let resultArr = [];
    for(let i = 0; i < testArr.length; i++) {
        if(testArr[i] === "1" && testArr[i + 1] !== "1") {
            resultArr.push(testArr[i]);
        }
    }
    return resultArr.length;
}
console.log(countLoneOnes(101));//2

//the karaca's encryption algorithm
function encrypt(word) {
    let wordStr = word.split("").reverse();
    let answer = [];
    for(let x of wordStr) {
        switch(x) {
            case "a":
                x = 0;
                break;
            case "e":
                x = 1;
                break;
            case "i":
                x = 2;
                break;
            case "o":
                x = 3;
                break;
            case "u":
                x = 4;
                break;
        }
        answer += x;
    }
    return answer + "aca";
}
console.log(encrypt("apple"));//1lpp0aca

//the configer cloner 
function mergeSettings(obj) {
    defaultConfig = {
        fisrt: "stepu",
        second: "monoply",
        third: "uno",
        fourth: "cards"
    };
    return Object.assign(defaultConfig, obj);
} 
console.log(mergeSettings({
    fisrt: "cards",
    second: "uno",
    third: "monoply",
    fourth: "stepu"
}));//{ fisrt: 'cards', second: 'uno', third: 'monoply', fourth: 'stepu' }

//the restricted prototype
function accountDetails(obj) {
    let accountPrototype = {
        accountNo: 1234567,
        amount: 777777,
        intrese: function getInterestRate() {
            return "0.5%";
        }
    };
    let myAccount = Object.create(accountPrototype);
    return myAccount.hasOwnProperty('getInterestRate');
}
console.log(accountDetails());//false

//the query string parser 
function queryParser() {
    let array = [['search', 'javascript'], ['page', '2'], ['sort','recent']];
    return Object.fromEntries(array);
}
console.log(queryParser());//{ search: 'javascript', page: '2', sort: 'recent' }

//the price inflation engine
function priceInflamation() {
    let item = {
        inventory_item_1: 100,
        inventory_item_2: 50,
        inventory_item_3: 150,
        inventory_item_4: 200
    };
    for (let [key, value] of Object.entries(item)) {
        item[key] = +(value * 1.1).toFixed(2);
    }
    return item;
}
console.log(priceInflamation());