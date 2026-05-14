function* myGenerator(){
    yield 1; 
    yield 2; 
    yield 3;
}
let x = myGenerator();
for(let value of x){
    console.log(value);
}