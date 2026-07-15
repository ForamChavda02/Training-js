const WorkerPool = require("./workerPool");
const path = require("path");

const pool = new WorkerPool(path.resolve (__dirname, "poolWorker.js"));

async function runTasks() {
    const tasks = [
        { type: 'fibonacci', data: 40 },
        { type: 'factorial', data: 15 },
        { type: 'prime', data: 10000000 },
        { type: 'fibonacci', data: 41 },
        { type: 'factorial', data: 16 },
        { type: 'prime', data: 20000000 },
        { type: 'fibonacci', data: 42 },
        { type: 'factorial', data: 17 },
    ];

    console.time("all tasks");

    try {
        const results = await Promise.all(
            tasks.map(task => {
                console.time(`Task: ${task.type} (${task.data})`);
                return poo.runTask(task)
                .then(result => {
                    console.timeEnd(`Task: ${task.type} (${task.data})`);
                    return result;
                });
            })
        );
        for(let i = 0; i < tasks.length; i++) {
            console.log(`${tasks[i].type}(${tasks[i].data}) = ${results[i].result}`);
        }
    }
    catch (err) {
        console.error("Eror running tasks:", err);
    }
    finally {
        console.timeEnd("All taks");
        pool.close();
    }
}

runTasks().catch(console.error);