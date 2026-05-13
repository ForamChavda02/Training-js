let x = new WeakMap();
let obj = {fname:"foram", lname:"chavda"};

x.set(obj, "player");

let t = x.get(obj);
console.log(t);

obj = null;
console.log(obj);

//tracking
let txt = "";
const vCount = new WeakMap();

const foram = {name : "foram", age: 21};
const aryan = {name : "aryan", age: 18};
const mayur = {name: "mayur" , age: 17};

track(foram);
track(aryan);
track(mayur);

function track(visitor){
    let count = vCount.get(visitor) || 0;
    count ++;
    vCount.set(visitor,count);
    txt = visitor.name + " " + visitor.age;
    console.log(txt);
}

//weak map secret data
const m = new WeakMap();

class user{
    constructor(name){
        m.set(this, {secret : "hidden data"});
        this.name = name;
    }
    getSecret() {
        return m.get(this).secret;
    }
}
const user1 = new user("foram");
secret = user1.getSecret();
console.log(secret);