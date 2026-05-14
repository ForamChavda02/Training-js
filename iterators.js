//.from()
const x = Iterator.from([1, 2, 3]);

let txt = " ";
for(const i of x) {
    txt += i;
}
console.log(txt);

//.drop()
const y = Iterator.from([4, 5, 6, 7, 8, 9]);

const z = y.drop(4);
for(const value of z){
    console.log(value);
}

//.every()
const a = Iterator.from([10, 11, 12, 13, 14, 15]);

const b = a.every(c => c > 9);
console.log(b);

//filter()
const d = Iterator.from([15, 16, 17, 18, 19]);

const e = d.filter(f => f > 17);
for(value of e){
    console.log(value);
}

//find()
const g = Iterator.from([20, 21, 22, 23, 24, 25]);

const h = g.find(h => h > 21);
console.log(h);

//flatMap()
const i = Iterator.from([26, 27, 28, 29, 30]);

const j = i.flatMap(x => [x, x + 20]);

for(const value of j){
    console.log(value);
}

//forEach()
const k = Iterator.from([31, 32, 33, 34, 35]);

const l = k.forEach(value => {
    console.log(value - 1);
});

//map()
const m = Iterator.from([36, 37, 38, 39, 40]);

const n = m.map(x => x * 3);
for(value of n){
    console.log(value);
}

//reduce()
const o = Iterator.from([41, 42, 43, 44, 45]);

const p = o.reduce((total, value) => total + value);

console.log(p);

//some()
const q = Iterator.from([46, 47, 48, 49, 50]);

const r = q.some(x => x > 48);
console.log(r);

//take()

const s = Iterator.from([51, 52, 53, 54, 55]);

const t = s.take(2);

for(value of t){
    console.log(value);
}