let a = "atharva syatem";
let b = /[as]/g;
let c = a.match(b);
console.log(c);//[ 'a', 'a', 'a', 's', 'a' ]

let d = "here is my office";
let e = /[a-z]/g;
let f = d.match(e);
console.log(f);/*[
  'h', 'e', 'r', 'e',
  'i', 's', 'm', 'y',
  'o', 'f', 'f', 'i',
  'c', 'e'
]*/

let g = "1234567890";
let h = /[2-6]/g;
let i = g.match(h);
console.log(i);//[ '2', '3', '4', '5', '6' ]

let j = "may 2026";
let k = /\D/g;
let l = j.match(k);
console.log(l);//[ 'm', 'a', 'y', ' ' ]

let m = /\W/g;
let n = j.match(m);
console.log(n);//[ ' ' ]

let o = /\s/g;
let p = j.match(o);
console.log(p);//[ ' ' ]

let q = /\x6F/g;
let r = j.match(q);
console.log(r);//null

let s = /\u{2026}/gu;
let t = j.match(s);
console.log(t);//null

const name = "foram chavda";
const regx = /(?<firstname>\w+ (?<lastname>\w+))/;
const u = name.match(regx);
let fname = u.groups.firstname;
let lname = u.groups.lastname;
console.log(fname);//foram chavda
console.log(lname);//chavda