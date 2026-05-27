//Create a function which returns the number of "true" values there are in an array.
function returnTrue(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] == true) {
            count ++;
        }
    }
    return count;
} 
console.log(returnTrue([true, false, false, true, false]));//2

//Write a function redundant that takes in a string str and returns a function that returns str.
function redundant(string) {
    function greet(){
        return greet;
    }
    return greet();
}
console.log(redundant("foram"));//[Function: greet]

//In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
//Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
function possibleBonus(a, b) {
    let x = Math.abs(a - b);
    if(x <= 6) {
        return true;
    }
    else {
        return false;
    }
}
console.log(possibleBonus(4, 7));//true

//Write a function that mimics (without the use of >>) the right shift operator and returns the result from the two given integers.
function shiftToRight(num, pow) {
    let shift = 2 ** pow;
    let result = Math.floor(num / pow);
    return result;
}
console.log(shiftToRight(80, 8));//10

//Write a function that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle
function perimeter(z, num) {
    return (4 * num * (z == "s")) + (6.28    * num * (z == "c"));
}
console.log(perimeter("c", 4));//25.12

//Given three arguments ⁠— an object obj of the stolen items, the pet's name and a value ⁠— return an object with that name and value in it (as key-value pairs).
//burglary series: add its name
function addName(obj, name, value) {
    obj.name = name;
    obj.value = value;
    return obj;
}
console.log(addName({tv: 30, shoes: 2}, "dog", 5));//{ tv: 30, shoes: 2, name: 'dog', value: 5 }

//derivative of a function
//create a function that takes numbers b and m as arguments and returns the derivative of the function f(x) = x^b with respect to x evaluated at x = m, where b and m are constants.
//f(x) = x^b -> df/dx = bx^b-1 now this is done now you wann do is replace x with m so what it becomes is df/dm = bm^b-1
function derivativeofm(b, m) {
    return b * m ** (b-1);
}
console.log(derivativeofm(4, 3));//48

//Try finding your ancestors and offspring with code
function generation(num, str) {
    if(num == 0) {
        return "me!";
    }
    else {
        switch(true) {
            case (num == -1 && str == "m"):
                return "father";
                break;
            case (num == -1 && str == "f"):
                return "mother";
                break;
            case (num == -2 && str == "m"):
                return "grand father";
                break;
            case (num == -2 && str == "f"):
                return "grand mother";
                break;
            case (num == 1 && str == "m"):
                return "son";
                break;
            case (num == 1 && str == "f"):
                return "daughter";
                break;
            case (num == 2 && str == "m"):
                return "grand son";
                break;
            case (num == 2 && str == "f"):
                return "grand daughter";
                break;
            default:
                return "no such relation";
                break;
        }
    }
}
console.log(generation(2, "f"));//grand daughter

//find the nth tetrahedral number
//a tetrahedron is a pyramid with a triangle base and three sides.a tetrahedral number is a number of items within a tetrahedron.
//a tetrahedral number represents the total number of identical items(shapes or points)
function tetra(num) {
    return (num * (num + 1) * (num + 2)) / 6;
}
console.log(tetra(5));//35

//function factory 
//create a function that takes a "base number" as an argument. this function should return another function which takes a new argument, and returns the sum of the base number and the new argument
function plusFunction(num) {
    function anotherPlusfunction(num2) {
        return num + num2;
    }
    return anotherPlusfunction;
}
//returning a function.
let add = plusFunction(10);
console.log(add(20));//30

//converting objects to arrays
//write a function that converts an object into an array, where each element represents a key-value pair in the form of an array
function toArray(obj) {
    let tempArr = []
    for(let [key, value] of Object.entries(obj)) {
        tempArr.push([key, value]);
    }
    return tempArr;
}
console.log(toArray({name: "foram", age: 21}));//[ [ 'name', 'foram' ], [ 'age', 21 ] ]

//return the objects keys and values
//returns keys and values as seprated array
function keyAndValues(obj) {
    let finaltempArr = [];
    let keys = [];
    let values = [];
    for(let[key, value] of Object.entries(obj)) {
        keys.push(key);
        values.push(value);
    }    
    finaltempArr.push(keys);
    finaltempArr.push(values);
    return finaltempArr;
}
console.log(keyAndValues({name: "foram", age: 21}));//[ [ 'name', 'age' ], [ 'foram', 21 ] ]
