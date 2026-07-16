const vm = require("vm");

const locallet = 20;
let result;

vm.runInThisContext("result = (typeof locallet !== 'undefined' ? locallet : 'not defined')");
console.log(result);

global.globallet = 30;
vm.runInThisContext("result = globallet");
console.log(result);

eval("result = locallet");
console.log(result);