function logMemoryUsage() {
    const memoryUsage = process.memoryUsage();
    console.log("Memory usage:");
    console.log(`RSS: ${Math.round(memoryUsage.rss / 1024 / 1024)} MB`);
    console.log(`Heap total: ${Math.round(memoryUsage.heapTotal / 1024 / 1024)} MB`);
    console.log(`Heap Used: ${Math.round(memoryUsage.heapUsed / 1024 / 1024)} MB`);
}

setInterval(logMemoryUsage, 2000);