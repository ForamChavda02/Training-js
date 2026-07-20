const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/video", (req, res) => {
    const videoPath = path.join(__dirname, "sample.mp4");

    if(!fs.existsSync(videoPath)) {
        return res.status(404).send("video file not found in the folder")
    }

    const videoSize = fs.statSync(videoPath).size;
    const range = req.headers.range;

    if(!range) {
        res.writeHead(200, { "Content-length": videoSize, "Content-type": "video/mp4"});
        return fs.createReadStream(videoPath).pipe(res);
    }

    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE + videoSize - 1);

    res.writeHead(206, {
        "Content-Rnage": `bytes ${start}-${end}/${videoSize}`,
        "accept-ranges":"bytes",
        "Content-length": end - start + 1,
        "Content-Type": "vedio/mp4"
    });

    fs.createReadStream(videoPath, { start, end }).pipe(res);
});

app.listen(3000, () => console.log("app is running on port 3000"))