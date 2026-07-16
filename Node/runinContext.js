const vm = require("vm");

const context = { value: 10 };
vm.createContext(context);

vm.runInContext("value += 5", context);
console.log(context.value);

const script = new vm.Script("value *= 2");
script.runInContext(context);
console.log(context.value);