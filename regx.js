let a = "foram chavda";
let n = a.match(/foram/);
console.log(n);//[ 'foram', index: 0, input: 'foram chavda', groups: undefined ]

let b = "hello world";
let c = b.replace(/world/, "atharva");
console.log(c);//hello atharva

let d = "learn javascript";
let e = d.search(/javascript/);
console.log(e);//6

let f = "red, green, white, yellow, blue, purple, sliver";
let h = f.match(/red|blue|green|gold/g);
console.log(h);//[ 'red', 'green', 'blue' ]

let i = "i got 95 marks";
let j = /\d/g;
let k = i.match(j);
console.log(k);//[ '9', '5' ]

let l = /\w/g;
let m = i.match(l);
console.log(m);/*[
  'i', 'g', 'o', 't',
  '9', '5', 'm', 'a',
  'r', 'k', 's'
]*/

let N = "i have 10 chocolates";
let o = /10?/g;
let p = N.match(o);
console.log(p);//[ '10' ]

let q = "heeeellllllo";
let r = /(eee)(ll)/d;
let s = q.match(r);
console.log(s);/*[
  'eeell',
  'eee',
  'll',
  index: 2,
  input: 'heeeellllllo',
  groups: undefined,
  indices: [ [ 2, 7 ], [ 2, 5 ], [ 5, 7 ], groups: undefined ]
]*/

let t = "atharva.system";
let u = /atharva./gs;
let v = t.match(u);
console.log(v);//[ 'atharva.' ]

let w = "java and javascript";
let X = /\w+/y;
X.lastIndex = 7;
let Y = w.match(X);
console.log(Y);//[ 'd', index: 7, input: 'java and javascript', groups: undefined ]

