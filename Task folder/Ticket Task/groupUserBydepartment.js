/*Part 1: Group Users by Department

Create a function that groups users based on their department property.

Input
const users = [
{ id: 1, name: "John", department: "IT" },
{ id: 2, name: "Jane", department: "HR" },
{ id: 3, name: "Mike", department: "IT" },
{ id: 4, name: "Sarah", department: "Finance" },
{ id: 5, name: "Tom", department: "HR" }
];
Expected Output
{
IT: [
{ id: 1, name: "John", department: "IT" },
{ id: 3, name: "Mike", department: "IT" }
],
HR: [
{ id: 2, name: "Jane", department: "HR" },
{ id: 5, name: "Tom", department: "HR" }
],
Finance: [
{ id: 4, name: "Sarah", department: "Finance" }
]
}
*/
//11:00 - 12:30
function groupOfSameDepartment(objArr) {
   let answer = {};

   for(let x of objArr) {
    if(!answer[x.department]) {
      answer[x.department] = [];
    }
    answer[x.department].push(x);
   }
   return answer;
}
console.log(groupOfSameDepartment([
{ id: 1, name: "John", department: "IT" },
{ id: 2, name: "Jane", department: "HR" },
{ id: 3, name: "Mike", department: "IT" },
{ id: 4, name: "Sarah", department: "Finance" },
{ id: 5, name: "Tom", department: "HR" }]));

/*[
  [
    { id: 1, name: 'John', department: 'IT' },
    { id: 3, name: 'Mike', department: 'IT' }
  ],
  [
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 5, name: 'Tom', department: 'HR' }
  ],
  [ { id: 4, name: 'Sarah', department: 'Finance' } ]
]
*/



/*Create a function that converts a flat array of categories into a nested tree structure using id and parentId.

Input
const categories = [
{ id: 1, parentId: null, name: "Electronics" },
{ id: 2, parentId: 1, name: "Laptop" },
{ id: 3, parentId: 1, name: "Mobile" },
{ id: 4, parentId: 2, name: "Gaming Laptop" },
{ id: 5, parentId: 2, name: "Business Laptop" },
{ id: 6, parentId: 3, name: "Android" }
];
Expected Output
[
{
id: 1,
parentId: null,
name: "Electronics",
children: [
{
id: 2,
parentId: 1,
name: "Laptop",
children: [
{
id: 4,
parentId: 2,
name: "Gaming Laptop",
children: []
},
{
id: 5,
parentId: 2,
name: "Business Laptop",
children: []
}
]
},
{
id: 3,
parentId: 1,
name: "Mobile",
children: [
{
id: 6,
parentId: 3,
name: "Android",
children: []
}
]
}
]
}
]
*/
//12:32 - 13:40
function nestedArr(array) {
    let nestedArr = [];
    for(let i = 0; i < array.length; i++) {
        
        nestedArr.push(array[i].childern = array.slice(i, i + 1));
    }
    return nestedArr;
}
console.log(nestedArr([
{ id: 1, parentId: null, name: "Electronics" },
{ id: 2, parentId: 1, name: "Laptop" },
{ id: 3, parentId: 1, name: "Mobile" },
{ id: 4, parentId: 2, name: "Gaming Laptop" },
{ id: 5, parentId: 2, name: "Business Laptop" },
{ id: 6, parentId: 3, name: "Android" }]));
