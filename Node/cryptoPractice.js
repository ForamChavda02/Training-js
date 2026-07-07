const crypto = require("crypto");
const fs = require("fs");

console.log(crypto.randomBytes(8).toString("hex"));

const hash2 = crypto
.createHash("sha256")
.update("hello")
.digest("hex");

console.log(hash2);

console.log(crypto.randomUUID());

const hmac = crypto
.createHmac("sha256", "secretkey")
.update("hello")
.digest("hex");

console.log(hmac);

const stream = fs.createReadStream("data.txt");

const hash = crypto.createHash("sha256");

stream.on("data", (chunk) => {
    hash.update(chunk);
});

stream.on("end", () => {
    console.log(hash.digest("hex"));
});