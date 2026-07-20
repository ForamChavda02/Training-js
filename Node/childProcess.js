const { exec } = require("child_process");
exec("echo hello from child process", (error, stdout, stderr) => {
    if(error) {
        console.log(error);
        return;
    }
    console.log(stdout);
});