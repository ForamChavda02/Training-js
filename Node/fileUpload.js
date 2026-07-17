const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const app = express();

//middleware
app.use(express.json());
app.use(express.static("public"));

//configure multer storage:
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = "./uploads";

        if(!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }

        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith("image/") || file.mimetype === "application/pdf") {
        cb(null, true);
    }
    else {
        cb(new Error ("Unsupported file type"), false);
    }
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024}
});

//serevr upload form
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

//single file route
app.post("/upload/single", upload.single("file"), (req, res) => {
    if(!req.file) {
        return res.status(400).json({ message: "No file uploaded"});
    }
    res.json({
        message: "File uploded successfully",
        file: {
            filename: req.file.filename,
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size
        }
    });
});

//multiple file route
app.post("/upload/multiple", upload.array("files", 5), (req, res) => {
    if(!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "No file uploaded"});
    }

    res.json({
        message: `${req.files.length} files uploaded successfully`,
        files: req.files.map(file => ({
            filename: file.filename,
            originalname: file.originalname,
            mimetype: file.mimetype,
            size: file.size
        }))
    });
});

//Error handling middleware
app.use((err, req, res, next) => {
    if(err instanceof multer.MulterError) {
        return res.status(400).json({ message: err.message });
    }
    else if(err) {
        return res.status(500).json({ error: err.message });
    }
    next();
});

app.listen(3000, () => {
    console.log("running on port 3000");
});