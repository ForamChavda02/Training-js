//return the sum of prime remider
function isPrime(num) {
    if(num < 2) {
        return false;
    }
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}
function primeNumberSum(num1, num2) {
    if(num1 === 0) {
        return 0;
    }
        let reminder = num1 % num2
          if(isPrime(reminder)){
            return reminder + primeNumberSum(num1 - 1, num2);
          }
 return primeNumberSum(num1- 1, num2);
}
console.log(primeNumberSum(1000, 4));//1250