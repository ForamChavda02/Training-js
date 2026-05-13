const x = new Map([
    ["foram", 21],
    ["aryan", 18],
    ["mayur", 17]
]);
x.set("foram", 22);
console.log(x);

console.log(x.get("foram"));

console.log(typeof x);

console.log(x.size);

console.log(x.delete("foram"));
console.log(x);

console.log(x.has("foram"));

console.log(x.clear());
console.log(x);

//forEach()
const y = new Map();
y.set("kiwi", 200);
y.set("apple", 100);
y.set("banana", 50);
let z = " ";
y.forEach(function(value, key){
    z += key + " = " + value;
})
console.log(z);

//entries()
let a = " ";
for(const x of y.entries()){
    a += x;
}
console.log(a);

//keys()
let b = " ";
for(const x of y.keys()){
    b += x;
}
console.log(b);

//values()
let c = " ";
for(const x of y.values()){
    c += x;
}
console.log(c);

//objects as keys
const x1 = {name : "x1"};
const x2 = {name : "x2"};
const x3 = {name : "x3"};

const X = new Map();

X.set(x1, 100);
X.set(x2, 200);
X.set(x3, 300);

console.log(X);

//Map.groupBy()
const d = [
    {name : "foram", age:21},
    {name : "mayur", age:17},
    {name : "aryan", age:18}
];
function myFunction({age}){
    return age > 18 ? "fine" : "underage";
}
const res = Map.groupBy(d,myFunction);
console.log(res);