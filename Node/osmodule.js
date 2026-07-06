const os = require("os");
const { uptime } = require("process");

console.log(`OS Platform: ${os.platform()}`);
console.log(`os type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname}`);
console.log(`Memory: ${os.freemem}GB free of ${os.totalmem}GB`);
console.log(`Homedirectory: ${os.homedir}`);
console.log(`Temporary Directory: ${os.tmpdir()}`);
const cpus = os.cpus();
console.log(`Number of CPU Cores: ${cpus.length}`);
console.log(`System Uptime: ${uptime} seconds`);