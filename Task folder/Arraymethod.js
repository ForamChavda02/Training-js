//Create a function to move all zeroes to end of array without changing order of other elements.
let arr1 = [0, 1, 2, 3, 0, 4, 0];
function zeroAtEnd(arr1) {
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] == 0) {
            arr1.copyWithin(arr1.length, i);
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
function missingNum(arr3) {
    for(let i = 0; i < arr3.length; i++) {
        if(arr3[i + 1] - arr3[i] !== 1) {
            arr3[i] += arr3[i] + 1;
            return arr3[i];
        }
        else {
            continue;
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
let arr6