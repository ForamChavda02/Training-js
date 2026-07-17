const cron = require("node-cron");
const nodemailer = require("nodemailer");
const express = require("express");

const app = express();

const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
    auth: {
        user: "abc@gmail.com",
        pass: "password"
    }
});

cron.schedule("0 9 * * *", async() => {
    console.log("Running daily report task");

    try {
        const reportData = {
            date: new Date().toISOString.split('T')[0],
            metrics: {
                users: 1250,
                orders: 350,
                revenue: 12500
            }
        };

        await transporter.sendMail({
            from: "system@gmail.com",
            to: "admin@gmail.com",
            subject: `Daily Report - ${reportData.date}`,
            html: `
              <h1>Daily Report </h1>
              <p><strong>Date: </strong> ${reportData.date} </p>
              <h2>Key Metrcies</h2>
              <ul>
                <li>Users: ${reportData.metrics.users}</li>
                <li>Orders: ${reportData.metrics.orders}</li>
                <li>Revenue: $${reportData.metrics.revenue}</li>
              </ul>
            `
        });

        console.log("Daliy report email sent successfully");
    }
    catch(err) {
        console.error(err);
    }
});

cron.schedule("0 * * * *", () => {
    console.log("Cleaning up temporary files");
});

const scheduleJobs = new Map();
app.use(express.json());

app.post("/schedule-job", (req, res) => {
    const { id, scheduledTime, task } = req.body;

    if(!id || !scheduledTime || !task) {
        return res.status(400).json({ message: "Missing required parameters"});
    }

    const jobTime = new Date(scheduledTime).getTime();
    const currentTime = Date.now();

    if(jobTime <= currentTime) {
        return res.status(400).json({ message: "Scheduled time must be in the future"});
    }

    const timeout = setTimeout(() => {
        console.log(`Executed job: ${id}`);

        console.log(`Task: ${task}`);

        scheduleJobs.delete(id);
    }, jobTime - currentTime);

    scheduleJobs.set(id, { timeout, scheduledTime, task});

    res.status(201).json({
        message: "job schedule successfully",
        job: {id, scheduledTime, task}
    });
});

app.listen(3000, () => {
    console.log("Task schedular is on port 3000");
});