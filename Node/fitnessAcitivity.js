const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const exercises = [
    { id: 1, name: "Running", durationMinutes: 30, caloriesBurned: 300 },
    { id: 2, name: "Weightlifting", durationMinutes: 45, caloriesBurned: 200}
];

app.get("/exercises", (req, res) => {
    res.json({ exercises });
});

app.get("/exercises/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const exe = exercises.find(e => e.id === id);
    if(!exe) {
        return res.status(404).json({ message: "exerices not found" });
    }
    res.json({exe});
});

app.post("/exercises", (req, res) => {
    const newExe = {
        id: exercises.length + 1,
        name: req.body.name,
        durationMinutes: req.body.durationMinutes,
        caloriesBurned: req.body.caloriesBurned
    };

    exercises.push(newExe);
    res.json({ newExe });
});

app.put("/exercises/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const exe = exercises.find(e => e.id === id);
    if(!exe) {
        return res.status(404).json({ message: "exericse not found" });
    }
    const updateExe = {
        name: req.body.name,
        durationMinutes: req.body.durationMinutes,
        caloriesBurned: req.body.caloriesBurned
    };
    res.json({ updateExe });
});

app.delete("/exercises/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = exercises.findIndex(e => e.id === id);
    if(index === -1) {
        return res.status(404).json({ message: "exercise not found" });
    }
    exercises.splice(index, 1);
});

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
});