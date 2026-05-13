for(let i = 0; i  <   5; i++){
    console.log(i);
}

//let i = 10;
//while(i < 10){
  //  console.log(i);
//}


let x = 1;
do {
    console.log(x);
    x++;
}
while( x<= 5);


//for...in 
const pearsom = {name:"foram", lname:"chavda", age:21};

let txt = " ";
for(let x in pearsom){
    txt += pearsom[x];
}
console.log(txt);  

//for...of loop
const name = "foram";
for(x of name){
    console.log(x);
}

const arr = [1 ,2 , 3 , 5];
for(x of arr){
    console.log(x * 2);
}

const s = new Set(["a","b","c","d"]);
for(x of s){
    console.log(x);
}

const m = new Map([
    ["foram" ,21],
    ["aryan", 18],
    ["mayur", 17]
]);
for(x of m){
    console.log(x);
}

//next()
mynum = {};
mynum[Symbol.iterator] = function() {
    let x = 0;
    done = false;
    return {
        next() {
            x += 10;
            if(x == 50) {done = true}
            return {value:x , done:done};
        }
    };
}

let y = " ";
for(const num of mynum){
    y += num;
}console.log(y);