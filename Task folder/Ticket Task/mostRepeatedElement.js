/*Find Most Repeated Element
Create a function that returns the highest repeated value from an array.

Input
[1, 2, 2, 3, 3, 3, 4]
Expected Output
3
*/
//16:10 - 16:31
function mostRepeated(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] == array[i] && array[j + 1] == array[i]) {
                return array[i];
            }
            else {
                i ++;
            }
        }
    }
}
console.log(mostRepeated([1, 2, 2, 3, 3, 3, 4]));//3

/*Find Missing IDs
Create a function that detects missing numbers from a sequence.

Input
[1, 2, 3, 5, 6, 8]
Expected Output
[4, 7]
*/
//16:31 - 16:39
function findMissingId(array) {
    let tempArr = [];
    for(let i = 1; i < array.length; i++) {
        if(array[i] - array[i - 1] !== 1) {
            tempArr.push(array[i] - 1);
        }
    }
    return tempArr;
}
console.log(findMissingId([1, 2, 3, 5, 6, 8]));//[ 4, 7 ]