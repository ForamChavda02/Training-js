function primesum(num) {
    let sum = 0; 
    for(let i = 1; i < Math.sqrt(num); i++) {
        if(num % i !== 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(primesum(5));