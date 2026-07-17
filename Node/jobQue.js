const express = require("express");
const app = express();
const cryto = require("crypto");
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

const jobDatabase = {};

app.post("/jobs", (req, res) => {
    const { taskType } = req.body;
    if(!taskType) {
        return res.json({message: "taskType is required"});
    }

    const jobId = cryto.randomUUID();

    jobDatabase[jobId] = {
        id: jobId,
        taskType: taskType,
        status: "pending",
        createdAt: new Date(),
        updateAt: new Date()
    };

    return res.status(202).json({ jobId: jobId, status: "pending"});
});

app.post("/jobs/:id/process", (req, res) => {
    const jobId = req.params.id;
    const job = jobDatabase[jobId];

    if(!job) {
        return res.status(404).json({ message: "Job not found" });
    }

    job.status = "processing";
    job.updateAt = new Date();

    setTimeout(() => {
        job.status = "completed";
        job.updateAt = new Date();
        console.log(`${jobId} has been successfully compkleted background programing`);
    }, 5000);

    return res.json({ message: "Processing strated", status: "processing"});
});

app.get("/jobs/status/:id", (req, res) => {
    const jobId = req.params.id;
    const job = jobDatabase[jobId];

    if(!job) {
        return res.status(404).json({ message: "job not found"});
    }

    const timpeElapsedSeconds = Math.floor((new Date() - job.createdAt) / 1000);

    return res.json({
        status: job.status,
        timpeElapsedSeconds: `${timpeElapsedSeconds}`
    });
});

app.get('/jobs/failed', (req, res) => {
    const failedJobs = Object.values(jobDatabase).filter(job => job.status === "failed");

    return res.json(failedJobs);
});

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});