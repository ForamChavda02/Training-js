//return the sum of prime remider
function isPrime(num) {
    if(num == 0 || num == 1) {
        return false;
    }
    if(num == 2) {
        return true;
    }
    for(let i = 1; i < Math.sqrt(num); i++) {
        if(num % i !== 0) {
            return true;
        }
    }
}
function primeNumberSum(num1, num2) {
    let sum = [];
    
    for(let i = 1; i <= num1; i++) {
          if(isPrime(i)){
              sum.push(i);
           }
    }
 return sum;
}
console.log(primeNumberSum(10, 3));