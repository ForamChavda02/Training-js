const x = [75, 56, 89, 23, 45];
x.forEach(function(x){
    console.log(x * 2);
});



const z = [66, 5, 52, 75, 85];
const y = z.map(myfunction);

function myfunction(value) {
        return value * 4;
}
console.log(y);
console.log(z);


const a = [45,78,96,52,63,74];
const b = a.flatMap(xfunction);

function xfunction(value){
    return value + 10;
}
console.log(b);
console.log(a);


const c = [66, 5, 52, 75, 85];
const d = c.filter(yfunction);

function yfunction(value){
    return value > 66;
}
console.log(c);
console.log(d);


//reduce()
const e = [45,78,96,52,63,74];
let mul = e.reduce(function(total, num){
    return total * num ;
},1);
console.log(mul);

//every()
const f = [66, 5, 52, 75, 85];
const g = f.some(zfunction);

function zfunction(value){
    return value > 52;
}
console.log(g);


//Array.from()
const num = [1,2,3,4,5,6];
const arr = Array.from(num, (x) => x +2);
console.log(arr);


//Array.keys()
const name = ["foram", "aryan", "mayur", "bhavya"];
const keys = name.keys();
for(let x of keys){
    console.log(x); 
}


//Array entries()
const fname = ["foram", "aryan", "mayur", "bhavya"];
const fa = fname.entries();

for(let x of fa){
    console.log(x);
}


//Array with()
const months = ["jan","mar", "april"];
const xm = months.with(1,"feb");
console.log(xm);


//Array Spread()
const arr1 = [4, 5, 6];
const arr2 = [7, 8, 9];

const res = [...arr1, ...arr2];
console.log(res);



//Array rest():
let m, rest;
const arr3 = [8, 9, 10, 11, 12, 13, 14];

console.log([m, ...rest] = arr3);
console.log(rest);
