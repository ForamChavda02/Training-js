const Students = [
    {name: "rohan", marks: 90},
    {name: "neha", marks: 78},
    {name: "rahul", marks: 89}
];

function findStudent(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = Students.find(s => s.name === name);

            if(student) {
                resolve(student);
            }
            else {
                reject("student not found");
            }
        }, 2000);
    });
}

function calculateGrade(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let grade;

            if(student.marks >= 80) {
                grade = "A";
            }
            else if(student.marks >= 60) {
                grade = "B";
            }
            else if(student.marks >= 40) {
                grade = "C";
            }
            else {
                grade = "Fail";
            }

            resolve({
                name: student.name,
                marks: student.marks,
                grade: grade
            });
        }, 2000);
    });
}

async function result() {
    try {
        const student = await findStudent("rohan");
        console.log(student);

        const finalResult = await calculateGrade(student);
        console.log(finalResult)
    }
    catch(error) {
        console.log(error);
    }
}
result();