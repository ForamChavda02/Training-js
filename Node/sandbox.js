const vm = require("vm");
const fs = require("fs");

const sandbox = {
    console: {
        log: console.log,
        error: console.error
    },

    fs: {
        readFileSync: fs.readFileSync
    },

    util: {
        add: (a, b) => a + b,
        multiply: (a, b) => a * b
    },

};

vm.createContext(sandbox);

try {
    vm.runInContext(`
        console.log("Running in sandbox");
        console.log("2 + 3 =", util.add(2, 3));
        
        try{
         const content = fs.readFileSync("notes.txt", "utf8");
         console.log("File content:", content);
        }
         catch(err) {
          console.error("File read error:", err.message);
         }

         try {
          console.log("Process info:", process.version);
         }
          catch(err) {
           console.log("Cannot access process:", err.message);
          }
    `, sandbox);
}
catch(err) {
    console.error("sandbox execution failed:", err);
}