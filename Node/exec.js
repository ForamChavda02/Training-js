const { exec } = require("child_process");
const command = process.platform === "win32" ? "dir" : "ls-la";

exec(command, (error, stdout, stderr) => {
    if(error) {
        console.error(`Error: ${error.message}`);
        return;
    }

    if(stderr) {
        console.error(`Command stderr: ${stderr}`);
    }

    console.log(`Command output: \n${stdout}`);
});

exec("echo $HOME", {
    env: { HOME: '/node/exec.js' }
}, (error, stdout, stderr) => {
    console.log(`Custom home directory: ${stdout.trim()}`);
}
);