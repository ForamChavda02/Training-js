let x = new WeakSet();
let myobj = {fname: "foram", lname:"chavda"};
x.add(myobj);
myobj = null;
let y = x.has(myobj);   
console.log(y);

let txt = " ";
const pearson = new WeakSet();

const foram = {name: "foram", age : 21};
const aryan = {name: "aryan", age : 18};
const mayur = {name: "mayur", age : 17};

track(foram);
track(aryan);
track(mayur);

function track(visitors){
    if(pearson.has(visitors)){
        txt += visitors.name;
    } else {
        pearson.add(visitors);
        txt += visitors.name;
    }
}console.log(txt);