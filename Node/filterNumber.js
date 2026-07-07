function filterNumber(numbersArray, chcekCondtion) {
    const result = [];
    for(let num of numbersArray) {
        if(chcekCondtion(num)) {
            result.push(num);
        }
    }
    return result;
}

const scores = [12, 35, 60, 88, 45, 27];

const isEven = (num) => num % 2 === 0;
const isPassing = (num) => num >= 50;

console.log(filterNumber(scores, isEven));
console.log(filterNumber(scores, isPassing));