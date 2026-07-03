const fs = require("fs");

fs.writeFileSync("student.txt", "");

fs.writeFileSync("student.txt", "Name: Foram Chavda");

let data = fs.readFileSync("student.txt", "utf8");
console.log("First Read: ");
console.log(data);

fs.appendFileSync("student.txt", "\nAge: 22");

data = fs.readFileSync("student.txt","utf8");
console.log("\nSecond Read:");
console.log(data);

fs.unlinkSync("student.txt");

console.log("\nFile deleted successfully");