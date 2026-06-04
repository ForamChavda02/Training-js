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
console.log(increaseValue);