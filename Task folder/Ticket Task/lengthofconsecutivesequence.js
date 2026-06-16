//Given an unsorted array of integers, find the length of the longest consecutive sequence.
/*
Input:

[100, 4, 200, 1, 3, 2]
Output:

4
*/
function lengthOfconsecutiveSequence(array) {
    let sortedArr = array.sort((a, b) => a - b);
    let resultArr = [];
    for(let i = 0; i < sortedArr.length; i++) {
        if(Math.abs(sortedArr[i] -sortedArr[i + 1]) == 1) {
            resultArr.push(sortedArr[i]);
        }
    }
    return resultArr.length + 1;
}
console.log(lengthOfconsecutiveSequence([100, 4, 200, 1, 3, 2]));//4