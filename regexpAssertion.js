const a = /^hello/;
const txt = "hello its regexp";
const c = a.test(txt);
console.log(c);//true

const d = /regexp$/;
const e = d.test(txt);
console.log(e);//true

const f = txt.search(/\bhe/);
const g = txt.search(/xp\b/);
console.log(f);//0
console.log(g);//14

const h = /hello(?= its)/;
const i = h.test(txt);
console.log(i);//true

const j = /its(?! regexp)/;
const k = j.test(txt);
console.log(k);//false

const l = /(?<=its)regexp/;
const m = l.test(txt);
console.log(m);//false

const n = /(?<!hello )itsregexp/;
const o = n.test(txt);
console.log(o);//false

