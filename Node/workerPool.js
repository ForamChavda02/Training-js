const { worker } = require("worker_threads");
const os = require("os");
const path = require("path");

class WorkerPool {
    constructor(workerScript, numWorkers = os.cpus().length) {
        this.workerScript = workerScript;
        this.numWorkers = numWorkers;
        this.workers = [];
        this.freeWorkers = [];
        this.tasks = [];

        this._initialize();
    }

    _initialize() {
        for(let i = 0; i < this.numWorkers; i++) {
            this._createWorker();
        }
    }

    _createWorker() {
        const worker = new Worker(this.workerScript);

        worker.on("message", (result) => {
            const { resolve } = this.tasks.shift();

            resolve(result);

            this.freeWorkers.push(worker);

            this._processQueue();
        });

        worker.on("exit", (code) => {
            if (code !== 0) {
                console.error(`Worker exited with code ${code}`);
                this._removeWorker(worker);
                this._createWorker();
            }
        });
        this.workers.push(worker);
        this.freeWorkers.push(worker);
    }

    _removeWorker(worker) {
        this.workers = this.workers.filter(w => w !== worker);
        this.freeWorkers = this.freeWorkers.filter(w => w !== worker);
    }

    _processQueue() {
        if(this.tasks.length > 0 && this.freeWorkers.length > 0) {
            const { taskData } = this.tasks[0];
            const worker = this.freeWorkers.pop();
            worker.postMessage(taskData);
        }
    }

    runTask(taskData) {
        return new Promise((resolve, reject) => {
            const task = { taskData, resolve, reject };
            this.tasks.push(task);
            this._processQueue();
        });
    }

    close() {
        for(const worker of this.workers) {
            worker.terminate();
        }
    }
} 

module.exports = WorkerPool;