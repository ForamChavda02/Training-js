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

//how many unique style
//unique words in a string
function uniqueStyle(array) {
    let str = array.toString().split();
    return str;
}
console.log(["Dub,Dancehall", "Industrial,Heavy Metal", "Techno,Dubstep", "Synth-pop,Euro-Disco", "Industrial,Techno,Minimal"]);