const { performance } = require("perf_hooks");

performance.mark("mark1");
performance.mark("mark2");

let sum = 0;
for(let i = 0; i < 100000; i++) {
    sum += i;
}

performance.mark("mark3");
performance.measure("measure1", "mark1", "mark2");
performance.measure("measure2", "mark2", "mark3");

console.log("All entries:");
console.log(performance.getEntries());

console.log("\nMeasure 1:");
console.log(performance.getEntriesByName("measure1"));