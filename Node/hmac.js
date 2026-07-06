const crypto = require("crypto");

function createSiganture(message, key) {
    const hmac = crypto.createHmac("sha256", key);
    hmac.update(message);
    return hmac.digest("hex");
}

function verifySignature(message, signature, key) {
    const expSign = createSiganture(message, key);
    return crypto.timingSafeEqual(
        Buffer.from(signature, "hex"),
        Buffer.from(expSign, "hex")
    );
}

const secretKey = 'verySecretKey';
const message = 'Important message to verify';

const signature = createSiganture(message, secretKey);
console.log("Message:", message);
console.log("signature:", signature);

try {
    const isValid = verifySignature(message, signature, secretKey);
    console.log('Signature valid:', isValid);

    const isInValid = verifySignature("foram", signature, secretKey);
    console.log("valid", isInValid);
}
catch(error) {
    console.log("error", error);
}