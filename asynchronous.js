let result; 

setTimeout(function() {
    result = 5;
}, 1000);

console.log(result);//undefined

function myDisplayer(some) {
    console.log(some);
}
function done(value) {
    myDisplayer(value);
}
setTimeout(function() {
    done(5);
}, 4000);//5

function getData(callback) {
    let ok = true;
    if(ok) {
        callback(null, "Data");
    } else {
        callback("something failed", null);
    }
}
getData(function(error, data){
    if(error) {
        myDisplayer(error);
        return;
    }
    myDisplayer(data);
});//Data

let myPromise = new Promise(function(reslove, reject){
    ok = true;
    if(ok) {
        reslove("ok");
    }
    else {
        reject("error");
    }
});

myPromise.then(
    function(value) {myDisplayer(value);},
    function(value) {myDisplayer(value);}
);//ok

let promise = Promise.resolve("ok");
promise
.then(function(value) {
    console.log(value);
})
.catch(function(value) {
    myDisplayer(value);
});//ok

let promise2 = Promise.reject("error");
promise2
.then(function(value) {
    console.log(value);
})
.catch(function(value) {
    myDisplayer(value);
});//error

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log(error);
});
/*
 {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: { lat: '-37.3159', lng: '81.1496' }
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets'
  }
}
*/

async function myFun() {
    return "hello";
}
console.log(myFun());//Promise { 'hello' }

async function getPeople() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const user = await response.json();
        user.forEach(user => {
            console.log(user.name);
        });
    }
    catch(error) {
        console.log("Error:", error);
    }
}
getPeople();
/*
Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
Chelsey Dietrich
Mrs. Dennis Schulist
Kurtis Weissnat
Nicholas Runolfsdottir V
Glenna Reichert
Clementina DuBuque
*/

function greet1(message) {
    return message + ":" + this.name;
}
const pearsom = {name : "Foram"};
let mag = Reflect.apply(greet1, pearsom, ["Hello"]);
console.log(Reflect.construct(Array, ["red", "white", "green"]));//[ 'red', 'white', 'green' ]
console.log(new Array(["red", "white", "green"]));//[ [ 'red', 'white', 'green' ] ]

const user = {};
Reflect.defineProperty(user, "id", {
    value: 123,
    writable: false
});
console.log(user);

const myObj = {name: "foram"};
const proxy = new Proxy(myObj, {
    get(target, prop) {
        return target[prop];
    }
});
console.log(proxy);//Proxy({ name: 'foram' })

const user1 = {name: "foram", age: 21};
const proxy2 = new Proxy(user, {
    get(target, prop) {
        log("greetings" + prop);
        return Reflect.get(target, prop);
    },
    set(target, prop, value) {
        log("setting" + prop);
        return Reflect.set(target, prop, value);
    }
});
proxy2.name = "aryan";
proxy2.age = 18;
console.log(proxy2);