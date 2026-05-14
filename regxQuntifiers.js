let a = "hello world";
let b = /l+/g;
let c = a.match(b);
console.log(c);//[ 'll', 'l' ]

let d = /o*/g;
let e = a.match(d);
console.log(e);/*[
  '', '', '',  '', 'o',
  '', '', 'o', '', '',
  '', ''
]*/

let f = "1, 100, 1000 or 10000";
let g = /10?/g;
let h = f.match(g);
console.log(h);//[ '1', '10', '10', '10' ]

let i = /\d{5}/g;
let j = f.match(i);
console.log(j);//[ '10000' ]

let k = /\d{4,5}/g;
let l = f.match(k);
console.log(l);//[ '1000', '10000' ]

let m = /\d{5,}/g;
let n = f.match(m);
console.log(n);//[ '10000' ]

