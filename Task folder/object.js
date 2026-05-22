//count properties in object
const pearson = {
    name: "Foram",
    age: 21,
    lname: "Chavda"
};
console.log((Object.keys(pearson)).length);//3

//create an object method
let pearson2 = {
    name: "Foram",
    age: 21,
    hello: function() {
        console.log("hello");
    }
}
pearson2.hello();//hello

//object method and this 
let pearson3 = {
    name: "Foram",
    age: 21,
    greetForam: function() {
        return "hello" + this.name;
    }
}
console.log(pearson3.greetForam());//helloForam

//store multiple students: print all name, find highest marks, calculate average marks
let student = [
    {
        name: "john",
        marks: 78
    },
    {
        name: "tony",
        marks: 90
    },
    {
        name: "chris",
        marks: 93
    }
];
console.log(student);
/*[
  { name: 'john', marks: 78 },
  { name: 'tony', marks: 90 },
  { name: 'chris', marks: 93 }
]*/
console.log(student[0].name, student[1].name, student[2].name);//john tony chris
let avgMarks = (student[0].marks + student[1].marks + student[2].marks) / 3;
console.log(avgMarks);//87
console.log(Math.max(student[0].marks, student[1].marks, student[2].marks));//93

//find object by property
let stu = student.find(student => student.name === "tony");
console.log(stu);//{ name: 'tony', marks: 90 }

//get student with marks greater than 80
let greaterMarks = student.filter(student => student.marks >= 80);
console.log(greaterMarks);//[ { name: 'tony', marks: 90 }, { name: 'chris', marks: 93 } ]

//frequency counter 
let fruits = [
    {
        fruit: "apple",
        price: 100
    },
    {
        fruit:"kiwi",
        price: 200
    },
    {
        fruit: "apple",
        price: 100
    }
];
let specific = fruits[0];
let count =1;
for(let i = 0; i <= fruits.length; i++) {
    if(fruits[0] == fruits[i]){
        count++;
        console.log(count);//2
    }
}