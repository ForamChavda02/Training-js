const zlib = require("zlib");
const { promisify } = require("util");

const gZipPromise = promisify(zlib.gzip);
const gunZipPromise = promisify(zlib.gunzip);

async function compressAndDecompress(input) {
    try {
        const compressed = await gZipPromise(input);
        console.log("oroginal size:", input.length, "bytes");
        console.log("Compressed size:", compressed.length, "bytes");

        const decompressed = await gZipPromise(input);
        console.log("Decompresed data:", decompressed.toString());
        console.log("Success", input === decompressed.toSorted());

        return compressed;
    }
    catch(err) {
        console.error(err);
    }
}

const testData = "This is some test data that will be compressed with the zlib module.";
compressAndDecompress(testData);