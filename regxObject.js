const a = /f/;
console.log(a.test("foram chavda"));//true

const b = /e/;
console.log(b.exec("here is card"));//[ 'e', index: 1, input: 'here is card', groups: undefined ]

let c = "atharva.*system";
let myFun = new RegExp(c);
console.log(myFun.test("atharva.*system"));//true