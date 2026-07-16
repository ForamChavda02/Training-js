const zlib = require("zlib");
const input = "This is some test data that will be compressed with different algorithms for comparison.".repeat(20);

function compareCompression(){
    console.log(`original data size: ${input.length} bytes`);

    zlib.gzip(input, (err, gzipped) => {
        if(err) {
            console.error("Gzip error:", err);
            return;
        }

        console.log(`Gzip size: ${gzipped.length} bytes (${Math.round(100 - (gzipped.length / input.length * 100))} % reduction)`);

        zlib.deflate(input, (err, deflate) => {
            if(err) {
                console.error("Deflate error:", err);
                return;
            }

            console.log(`Deflate size: ${deflate.length} bytes (${Math.round(100 - (deflate.length / input.length * 1000))}% reduction)`);

            if(typeof zlib.brotliCompress === "function") {
                zlib.brotliCompress(input, (err, brotil) => {
                    if(err) {
                        console.error(err);
                        return;
                    }
                    console.log(`Brotil size: ${brotil.length} bytes (${Math.round(100 - (brotil.length / input.length * 100))}% reduction)`);
                });
            }
            else {
                console.log("Brotli compression not available in this Node.js version");
            }
        });
    });
}

compareCompression();