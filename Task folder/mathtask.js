//binary search
let arr1 = [1, 2, 3, 4, 5, 6];
function binarySearch(arr1) {
    let start = 0;
    let end = arr1.length - 1;
    let target = 5;
    for(let i = 0; i < arr1.length; i++) {
        let mid = Math.floor((start + end) / 2);
        if(arr1[mid] == target) {
            return mid;
        }
        else if(arr1[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
}
console.log(binarySearch(arr1));

//create a function to identify the armstrong number
//armstrong number is a number that is equal to the sum of its own digits,where each digit is raised to the power of the total number of digits in the number.
let num1 = "153";
function isArmstrong(num1) {
    let power = num1.length;
    if(num1 == (num1[0]**power + num1[1]**power + num1[2]**power)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isArmstrong(num1));//true

function hello(a, b) {
    return arguments.length;
}
console.log(hello(1, 2));//2
console.log(hello.toString());/*function hello(a, b) {
    return arguments.length;
}*/
