const x  = [77, 44, 85, 65, 32, 56];

for(let a = x.length-1; a > 0 ; a--){
    let i = Math.floor(Math.random() * (a + 1));
    let j = x[a];
    x[a] = x[i];
    x[i] = j;
}
console.log(x);