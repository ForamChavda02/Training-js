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
            let repeated = array.filter(item => item === x);
            if (repeated.length > 1) {
                resultArr.push(x + "s");
            } else {
                resultArr.push(x);
            }
        }
    }
    return resultArr;
}
console.log(pluralize(["cow", "pig", "cow", "cow"]));