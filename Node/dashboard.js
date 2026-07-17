const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { v4: uuidv4 } = require("uuid");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const analyticsData = {
    pageViews: {},
    activeUsers: new Set(),
    events: []
};

app.use((req, res, next) =>{
    const page = req.path;
    analyticsData.pageViews[page] = (analyticsData.pageViews[page] || 0) + 1;

    io.emit("analytics: update", {
        type: "pageView",
        data: { page, count: analyticsData.pageViews[page] }
    });
    next();
});

app.post("/track", express.json(), (req, res) => {
    const { event, data } = req.body;
    const eventId = uuidv4();
    const timestamp = new Date().toISOString();

    const eventData = { id: eventId, event, data, timestamp };
    analyticsData.events.push(eventData);

    if(analyticsData.events.length > 1000) {
        analyticsData.events.shift();
    }

    io.emit("analytics:event", eventData);

    res.status(201).json({ sucsess: true, eventId });
});

io.on("connection", (socket) => {
    const userId = socket.handshake.query.userId || "anonymous";
    analyticsData.activeUsers.add(userId);

    socket.emit("analytics:init", {
        pageViews: analyticsData.pageViews,
        activeUsers: analyticsData.activeUsers.size,
        recentEvents: analyticsData.events.slice(-50)
    });

    io.emit("analytics:update", {
        type: "activeUsers",
        data: analyticsData.activeUsers.size
    });

    socket.on("disconnect", () => {
        analyticsData.activeUsers.delete(userId);
        io.emit("analytics:update", {
            type: "activeUsers",
            data: analyticsData.activeUsers.size
        });
    });

    socket.on("analytics:event", (data) => {
        const eventId = uuidv4();
        const timestamp = new Date().toISOString();
        const eventData = { id: eventId, ...data, timestamp, userId };

        analyticsData.events.push(eventData);
        if(analyticsData.events.length > 1000) {
            analyticsData.events.shift();
        }
        io.emit("analytics:event", eventData);
    });
});

app.get("/api/analytics", (req, res) => {
    res.json({
        pageViews: analyticsData.pageViews,
        activeUsers: analyticsData.activeUsers.size,
        totalEvents: analyticsData.events.length,
        recentEvents: analyticsData.events.slice(-50)
    });
});

//serve the dashboard.
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`on ${PORT}`);
});