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
function getDays(date1, )