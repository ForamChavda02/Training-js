const orderEvents = require("./orderEvents");

orderEvents.on("orderPlaced", (order) => {
    console.log("Updating stock...");
});

orderEvents.on("orderPlaced", (order) => {
    console.log("Sending email...");
});

orderEvents.on("orderPlaced", (order) => {
    console.log("Creating invoice...");
});