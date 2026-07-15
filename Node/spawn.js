const { spawn } = require("child_process");

const child = spawn("node", ["-e", `
    setInterval(() => {
        console.log("still running...", Date.now());
    }, 1000);
`]);

child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

setTimeout(() => {
    console.log("killing a child process");
    child.kill("SIGTERM");
}, 2000);

child.on("exit", (code, signal) => {
    console.log(`Child process exited with code ${code} and signal ${signal}`);
});