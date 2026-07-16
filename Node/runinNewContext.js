const vm = require("vm");

const context = { value: 10 };
vm.runInNewContext("value += 5; result = value * 2;", context);

console.log(context);