const express = require("express");

const app = express();
const port = 3000;

//middleware
app.use(express.json());

let students = [
    {
        id: 1,
        name: "Tony",
        age: 22
    },
    {
        id: 2,
        name: "Thor",
        age: 23
    }
];

//home route
app.get("/", (req, res) =>{
    res.send("Student REST Apis");
});

//get all students
app.get("/students", (req, res) => {
    res.json(students);
});

//get student by id
app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if(!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    res.json(student);
});

//add new student
app.post("/students", (req, res) => {
    const { name, age } = req.body;

    const newStudent = {
        id: students.length + 1,
        name,
        age
    };
    students.push(newStudent);

    res.status(201).json({
        message: "student added",
        student: newStudent
    });
});

//update student
app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find(student => student.id === id);

    if(!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    student.name = req.body.name;
    student.age = req.body.age;

    res.json({
        message: "Student Updated",
        student
    });
});

//Delete a student
app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = students.findIndex(student => student.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }
    students.splice(index, 1);

    res.json({
        message: "Student deleted"
    });
});

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});