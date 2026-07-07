const Students = [
    {id: 1, name: "john"},
    {id: 2, name: "Alex"}
];

function findStudent(id, callback) {
   const found = Students.find(s => s.id === id);
   callback(found);
}

findStudent(2, (s) => {
    console.log(s);
})