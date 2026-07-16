const zlib = require("zlib");
const { Transform } = require("stream");

class ProgressTracker extends Transform {
    constructor(options = {}) {
        super(options);
        this.processedBytes = 0;
        this.startTime = Date.now();
    }
    _transform(chunk, encoding, callback) {
        this.processedBytes += chunk.length;
        const elapsed = (Date.now() - this.startTime) / 1000;
        const rate = (this.processedBytes / 1024 / 1024 / elapsed).toFixed(2);

        process.stdout.write(`\rProceesed: ${(this.processedBytes / 1024 / 1024).toFixed(2)} MB |` + `Rate: ${rate} MB/s`);

        this.push(chunk);
        callback();
    }
}

function processLargeFile() {
    const gzip = zlib.createGzip({ level: 6 });
    const progress = new ProgressTracker();

    const data = Buffer.alloc(1024 * 1024 * 100);

    const { Readable } = require("stream");
    const readable = Readable.from(data);

    console.log("Starting compression...");

    readable
       .pipe(progress)
       .pipe(gzip)
       .pipe(process.stdout);

    gzip.on("end", () => {
        console.log("\nCompression complete");
    });
}

processLargeFile();