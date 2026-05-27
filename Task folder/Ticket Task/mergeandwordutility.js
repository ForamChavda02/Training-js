/*Merge Two Arrays Without Duplicate
Create a function that merges two arrays and removes duplicate values.

Input
[1, 2, 3]
[2, 3, 4]
Expected Output
[1, 2, 3, 4]
*/
//16:39 - 16:51
function mergeArrays(array1, array2) {
    let finalArr = array1.concat(array2);
    let uniqueArr = [];
    for(let i = 0; i < finalArr.length; i++) {
        if(!uniqueArr.includes(finalArr[i])) {
            uniqueArr.push(finalArr[i]);
        }
    }
    return uniqueArr;
}
console.log(mergeArrays([1, 2, 3], [2, 3, 4]));//[ 1, 2, 3, 4 ]

/*Find Longest Word From Array
Create a function that returns the longest string from an array.

Input
["javascript", "nodejs", "mongodb"]
Expected Output
"javascript"
*/
//16:51 - 16:57
function longestStr(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = i; j < array.length; j++) {
            if(array[i].length > array[j].length) {
                return array[i];
            }
        }
    }
}
console.log(longestStr(["javascript", "nodejs", "mongodb"]));//javascript