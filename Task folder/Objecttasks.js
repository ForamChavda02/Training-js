//using Object.keys()
const a = {
    name: "foram",
    age: 21,
    city: "gandhinagar"
};
console.log(Object.keys(a));//[ 'name', 'age', 'city' ]

//using Object.values(): calculate the total score 
const b = {
    apple: 100,
    kiwi: 200
};
const sum = Object.values(b).reduce((total, value) => total + value, 0);
console.log(sum);//300

//using Object.entries() 
const c = {
    bottel: 1000,
    plate: 100,
    bowl: 900
};
const increaseValue = Object.fromEntries(
    Object.entries(c).map(([key, value]) => [
        key,
        value * 1.1
    ])
);
console.log(increaseValue);//{ bottel: 1100, plate: 110.00000000000001, bowl: 990.0000000000001 }

//Object.fromEntries() 
const arr = [
    ["name", "foram"],
    ["age", 21],
    ["city", "ahemdabad"]
];
const resultArr = Object.fromEntries(arr);
console.log(resultArr);//{ name: 'foram', age: 21, city: 'ahemdabad' }

//filter and rebuild the object
const d = {
    name: "laptop",
    price: 70000,
    stock: 0,
    brand: "dell",
    rating: 0
};
const removeVal = Object.fromEntries(
    Object.entries(d).filter(([key, value]) => {
        return value !== 0;
    })
);
console.log(removeVal);//{ name: 'laptop', price: 70000, brand: 'dell' }

//swap keys and values
const e = {
    OK: 200,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
};
const replaceKeyValue = Object.fromEntries(
    Object.entries(e).map(([key, value]) => [value, key]) 
);
console.log(replaceKeyValue);//{ '200': 'OK', '404': 'NOT_FOUND', '500': 'SERVER_ERROR' }

const f = {
  emp1: { name: "John", salary: 50000 },
  emp2: { name: "Jane", salary: 60000 },
  emp3: { name: "Mike", salary: 45000 }
};
const getSalary = Object.fromEntries(
    Object.entries(f).filter(([key, value]) => {
        return value.salary > 50000
    })
);
console.log(getSalary);//{ emp2: { name: 'Jane', salary: 60000 } }

//merge objects
const g = {
    name: "tony",
    age: 51
};
const h = {
    city: "newyork",
    country: "USA"
};
console.log(Object.assign({}, g, h));//{ name: 'tony', age: 51, city: 'newyork', country: 'USA' }

//check if certain thing present or not in object
const i = {
    id: 101,
    name: "john",
    department: "IT"
};
console.log(Object.hasOwn(i, "department"));//true

//freeze the object
const j = {
    country: "india",
    states: 29
};
Object.freeze(j);
country: "usa";
console.log(j);//{ country: 'india', states: 29 }

//Object.seal()
const k = {
    name: "phone",
    price: 100000
};
Object.seal(k);
k.brand = "iPhone";
console.log(k);//{ name: 'phone', price: 100000 }

//Object.isFrozen()
const l = {
    a: 1
};
Object.freeze(l);
console.log(Object.isFrozen(l));//true

//Object.isSealed()
const m = {
    b: 1000
};
Object.seal(m);
console.log(Object.isSealed(m));//true

//create an object
const n = {
    greet() {
        return "hello";
    }
};
const newObj = Object.create(n);
console.log(newObj.greet());//hello

//mixed
const inventory = {
    laptop: 70000,
    iPhone: 100000,
    mouse: 1000,
    Keyboard: 6000
};
let o = Object.fromEntries(
    Object.entries(inventory)
    .filter(([key, value]) => value !== 0)
);
console.log(o);//{ laptop: 70000, iPhone: 100000, mouse: 1000, Keyboard: 6000 }
console.log(Object.values(o).reduce((total, value) => total + value, 0));//177000

//Find duplicate values
const p = {
  user1: "John",
  user2: "Jane",
  user3: "John",
  user4: "Mike",
  user5: "Jane"
};
let q = Object.values(p);
const duplicate = q.filter((name, index) => {
    return q.indexOf(name) !== index;
});
console.log(duplicate);

//rename object keys
const r = {
  firstName: "John",
  lastName: "Doe",
  age: 25
};
let s = Object.fromEntries(
    Object.entries(r).map(([key, value]) => {
        if(key == "firstName") {
            return ["first_name", value];
        }
        if(key == "lastName") {
            return ["last_name", value];
        }
        return [key, value];
    })
);
console.log(s);//{ first_name: 'John', last_name: 'Doe', age: 25 }

//find the most expensive product
const t = {
  laptop: 70000,
  mobile: 50000,
  mouse: 1000,
  keyboard: 2000
};
    let u = Object.keys(t).reduce((max, key) => {
        return t[key] > t[max] ? key : max;
    });
console.log(u);//laptop

//convert array to lookup object
const v = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Mike" }
];
const w = Object.fromEntries(
    v.map(key => [key.id, key])
);
console.log(w);
/*
{
  '1': { id: 1, name: 'John' },
  '2': { id: 2, name: 'Jane' },
  '3': { id: 3, name: 'Mike' }
}
*/

//count occurrences
const x = {
  a: "apple",
  b: "banana",
  c: "apple",
  d: "orange",
  e: "banana",
  f: "apple"
};
const z = Object.values(x);
let A = {};
z.forEach(element => {
    A[element] = (A[element] || 0) + 1 
});
console.log(A);//{ apple: 3, banana: 2, orange: 1 }

//deep property sum
const B = {
  hr: {
    employees: 5
  },
  it: {
    employees: 10
  },
  sales: {
    employees: 7
  }
};
const C = Object.values(B).reduce((total, department) => {
    return total + department.employees
}, 0);
console.log(C);