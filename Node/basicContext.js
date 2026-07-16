const vm = require("vm");
const context = { x: 2 };

vm.createContext(context);
vm.runInContext("x = x * 2; y = 10;", context);

console.log(context);