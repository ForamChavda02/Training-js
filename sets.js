//creating a set
const a = new Set(["a", "b", "c", "d"]);
console.log(a);
a.add("f");
a.add("g");
a.add("h");
console.log(a);


const b = new Set();

const c = "foram";
const d = "aryan";
const e = "mayur";
const f = "bhavya";

b.add(c);
b.add(d);
b.add(e);
b.add(f);
console.log(b);


//listing elements using for loop
const g = new Set(["a", "b", "c"]);
let txt = " ";
for(const x of g){
    txt += x;
}
console.log(txt);
console.log(g instanceof Set);