const fs = require("fs");
const path = require("path");

const uploadPath = path.join(__dirname, "username", "image.jpg");

fs.writeFile(uploadPath, "Image Data", (err) => {
    if(err) throw err;
    console.log("uploaded");
    console.log("Extension:", path.extname(uploadPath));
});