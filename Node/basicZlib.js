const zlib = require("zlib");

const input = "this is some text that will be compressed using the zlib module in Node.js";

zlib.gzip(input, (err, compressed) => {
    if(err) {
        console.error(err);
        return;
    }

    console.log("Original size:", input.length, "bytes");
    console.log("Compressed size:", compressed.length, "bytes");
    console.log("Compressed ratio:", Math.round(100 - (compressed.length / input.length * 100)) + "%");

    zlib.gunzip(compressed, (err, decompressed) => {
        if(err) {
            console.error(err);
            return;
        }

        console.log("Decompresed data:", decompressed.toString());
        console.log("Successfully decompressed:", input === decompressed.toString());
    });
});