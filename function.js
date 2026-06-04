const pearson1 = { name: "foram"};
const pearson2 = {name: "aryan"};
const pearson3 = {name: "mayur"};

function greet(greeting) {
    return "hello" + " " + this.name;
}

console.log(greet.call(pearson3, "hello"));//hello mayur
console.log(greet.apply(pearson1, ["hello"]));//hello foram

const pearson = {
    fullName: function() {
        return this.fname + " " + this.lname;
    }
};
const pearson4 = {
    fname: "foram",
    lname: "chavda"
};
console.log(pearson.fullName.call(pearson4));//foram chavda
console.log(pearson.fullName.apply(pearson4));//foram chavda

const superPearson = {
  fullName: function(city, country) {
    return this.firstname + " " + city + " " + this.lastname + country;
  }  
};

const pearson5 = {
    firstname: "tony",
    lastname: "stark"
};
console.log(superPearson.fullName.call(pearson5, "newyork", "usa"));//tony newyork starkusa
console.log(superPearson.fullName.apply(pearson5, ["chicago", "usa"]));//tony chicago starkusa

const numbers = [9, 6, 10, 3];
console.log(Math.max.apply(0, numbers));//10

const greetaryan = greet.bind(pearson2);
console.log(greetaryan());//hello aryan

(function () {
    console.log("hii !!");
})();//hii !!

(function (name) {
    console.log("hello" + name);
})("Bhavya");//helloBhavya

(() => {
    console.log("javascript");
})();//javascript

(function factorial(n){
    if(n <= 1) return 1;
    return n* factorial(n - 1);
})(5);