const x = Iterator.from([1, 2, 3]);

let txt = " ";
for(const i of x) {
    txt += i;
}
console.log(txt);

const y = x.drop(2);
console.log(y);