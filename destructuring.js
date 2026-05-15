const p1 = {
    fname: "foram",
    lname: "chavda",
    age: 21
};

let {fname, lname, company = "Atharva"} = p1;//this line extracts values from the object and stores them into variables.
console.log(fname + " " + lname + company);//foram chavdaAtharva

const arr = ["foram", "aryan", "mayur"];
let [n1, n2, n3] = arr;
console.log(n1 + " " + n2 + " " + n3);//foram aryan mayur

const arr2 = ["bhavya", "deetya", "avi"];
let [m1,,m2] = arr2;
console.log(m1 + " " + m2);//bhavya avi

const arr3 = ["hello", "hii", "world"];
let{[0]: o1, [2]: o2} = arr3;
console.log(o1 + " " + o2);//hello world

const arr4 = ["hello", "from", "atharva", "this", "is", "IT company"];
const [q1, q2, ...rest] = arr4;
console.log(q1 + " " + q2);//hello from

const arr5 = new Map([
    ["foram", 21],
    ["aryan", 18],
    ["mayur", 17]
]);
let x = "";
for(const[key, value] of arr5){
    x += key + " " + value;
}
console.log(x);//foram 21aryan 18mayur 17

let f1 = "foram";
let f2 = "chavda";
[f1, f2] = [f2, f1];
console.log(f1 + " " + f2);//chavda foram