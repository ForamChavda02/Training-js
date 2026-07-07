const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
    if(err) throw err;
    console.log(data);
});

fs.appendFile("log.txt", "\nI am doing internship", (err) => {
    if(err) throw err;
    console.log("Updated");
});

fs.unlink("log.txt", (err) => {
    if(err) throw err;
    console.log("deleted");
});

if(fs.existsSync("log.txt")) {
    console.log("Exist");
}
else {
    console.log("log file is deleted");
}

fs.readdir(".", (err, files) => {
    if(err) throw err;
    console.log(files);
});

/*fs.readFile("data.txt", "utf8", (err, data) => {
    if(err) throw err;
    const students = JSON.parse(data);
    comsole.log(data);
});
*/
const path = require("path");

const file = path.join(__dirname, "createfile.js");

console.log(file);

console.log(path.extname("createfile.png"));

console.log(path.basename("/home/foram/desktop/training/node"));

console.log(path.dirname("/home/foram/desktop/training/node"));

console.log(path.parse("/home/foram/desktop/training/node"));