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
    let sum = 0;
    
    for(let i = 1; i <= num1; i++) {
        let reminder = i % num2
          if(isPrime(reminder)){
              sum += reminder;
           }
    }
 return sum;
}
console.log(primeNumberSum(1000, 4));//1250