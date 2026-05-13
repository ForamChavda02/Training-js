//size of set, has(), forEach(), values(), keys(), entries()
const a = new Set(["a", "b", "c", "d"]);

console.log(a.size);

console.log(a.has("1"));

a.forEach(function(value){
    console.log(value);
});

let b = a.values();
console.log(b); 

let c = a.keys();
let txt = " ";
for(const x of c){
    txt += x;
}console.log(txt);


let d = a.entries();
let txtt = " ";
for(const x of d){
    txtt += x;
}
console.log(txtt);