const vm = require("vm");

const script = new vm.Script("x += 40; let z = 30;");

const context1 = { x: 10 };
const context2 = { x: 20 };

vm.createContext(context1);
vm.createContext(context2);

script.runInContext(context1);
script.runInContext(context2);

console.log(context1);
console.log(context2);