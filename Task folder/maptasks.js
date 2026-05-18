//map: multipy with 2
let x = [1, 2, 3, 4, 5];
let y = x.map(myFun);
function myFun(value, index, array) {
    return value * 2;
}
console.log(y);//[ 2, 4, 6, 8, 10 ]

//add 2 
let z = [5, 2, 3, 8, 7];
let a = z.map(function1);
function function1(value, index, array) {
    return  value + 2;
}
console.log(a);//[ 7, 4, 5, 10, 9 ]

//square numbers
let b = [11, 12, 13, 14, 15];
let c = b.map(function2);
function function2(value, index, array) {
    return value ** 2;
}
console.log(c);//[ 121, 144, 169, 196, 225 ]

//array to string 
let d = [15, 16, 17, 18, 19];
let e = d.map(function3);
function function3(value, index, array) {
    return value.toString();
}
console.log(e);//[ '15', '16', '17', '18', '19' ]

//prefix 
let f = ["tony", "john", "thor", "chris"];
let g = "Mr.";
let h = f.map(value => g + value);
console.log(h);//[ 'Mr.tony', 'Mr.john', 'Mr.thor', 'Mr.chris' ]

//lenght of each element
let i = ["john", "alex", "tony"];
let j = i.map(function4);
function function4(value, index, array) {
    return value.length;
}
console.log(j);//[ 4, 4, 4 ]

//uppercase word
let k = ["a", "b", "c", "d"];
let l = k.map(function5);
function function5(value, index, array) {
    let a = value[0].toUpperCase();
    console.log(a);/*A
B
C
D*/
}

let m = [100, 200, 300, 400];
let n = "$";
let o = m.map(value => n + value);
console.log(o);//[ '$100', '$200', '$300', '$400' ]

//add index
let p = ["a", "b", "c", "d", "e"];
let r = p.map(function6);
function function6(value, index, array) {
    let x = value + ":" + index;
    console.log(x);/*a:0
b:1
c:2
d:3
e:4*/
}

//boolean to string
let s = [true, false, true];
let t = s.map(value => value.toString());
console.log(t);//[ 'true', 'false', 'true' ]

//student name format
let name = [
    {id: 1, fname: "foram", lname: "chavda"},
    {id: 2, fname: "aryan", lname: "chavda"},
    {id: 3, fname: "mayur", lanme: "chavda"}
];
let u = name.map(value => value.fname);
console.log(u);//[ 'foram', 'aryan', 'mayur' ]