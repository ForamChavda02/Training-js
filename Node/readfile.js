const path = require("path");

const filename = path.basename("/foram/docs/photo.txt");
console.log(filename);

console.log("Directory name:", __dirname);
console.log("File name:", __filename);

const configPath = path.join(__dirname, "config", "app-config-json");
console.log("Config file path:", configPath);
console.log("Directory using path.dirname():", path.dirname(__filename));

const pathString = path.format({
    root: '/',
    dir: '/users/docs',
    name: 'file',
    ext: '.txt'
});
console.log(pathString);

console.log(`Path seprator: ${JSON.stringify(path.sep)}`);
console.log(`Path delimiter: ${JSON.stringify(path.delimiter)}`);
console.log(`Normalized path:`, path.win32.normalize("C:\\\\\temp\\\\foo\\...\\bar\\file.txt"));