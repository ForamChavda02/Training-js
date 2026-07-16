const vm = require("vm");
const { performance, PerformanceObserver } = require("perf_hooks");
const crypto = require("crypto");

const expensiveCalculation = new vm.Script(`
    function calculate(n) {
      let result = 0;
      for (let i = 0; i < n; i++) {
        result += Math.sqrt(i) * Math.PI;
      }
      return result;
    }
  
    calculate;    
`);

const context = { Math };
vm.createContext(context);

const calculate = expensiveCalculation.runInContext(context);

console.log("Result (n=1000):", calculate(1000));
console.log("Result (n=2000):", calculate(2000));

const cache = new Map();

function compileWithCache(code, filename) {
    if(cache.has(code)) {
        console.log(`Using cached script for ${filename}`);
        return cache.get(code);
    }

    console.log(`Compiling script for ${filename}`);
    const script = new vm.Script(code, {
        filename,
        cachedData: null,
        produceCachedData: true
    });

    cache.set(code, script);
    return script;
}

function measurePerformance() {
    const obs = new PerformanceObserver((items) => {
        items.getEntries().forEach((entry) => {
            console.log(`\nExecution time for ${entry.name}: ${entry.duration.toFixed(2)}ms`);
        });
        performance.clearMarks();
    });

    obs.observe({ entryTypes: ["measure"], buffered: true });

    const smallScript = new vm.Script(`
        (() => {
          let sum = 0; 
          for (let i = 0; i < 1000; i++) sum += i; 
          return sum;
        })()
    `);
    
    const largeScript = new vm.Script(`
    (() => {
        function processData(data) {
          return data.map(x => ({
            ...x,
            processed: true,
            timestamp: Date.now(),
            hash: crypto.createHash('md5').update(JSON.stringify(x)).digest('hex')
          }));
        }
        
        const data = Array(1000).fill(null).map((_, i) => ({ id: i, value: Math.random() }));
        return processData(data);    
    })()  
    `);

    // Context with global references required for execution
    const sandbox = { crypto, Math, Date, Array, JSON };
    vm.createContext(sandbox);

    performance.mark("small-start");
    smallScript.runInContext(sandbox);
    performance.mark("small-end");

    performance.mark("large-start");
    largeScript.runInContext(sandbox);
    performance.mark("large-end");

    performance.measure("Small script execution", "small-start", "small-end");
    performance.measure("Large script execution", "large-start", "large-end");
}

measurePerformance();

function createOptimizedContext() {
    const content = {
        console: {
            log: console.log,
            error: console.error
        },
        setTimeout,
        clearTimeout,
        Intl,
        Date,
        utils: {
            formatNumber: n => new Intl.NumberFormat().format(n),
            formatDate: d => d.toISOString()
        }
    };

    vm.createContext(content);
    return content;
}

const sharedContext = createOptimizedContext();

function runWithSharedContext(code) {
    try {
        const script = new vm.Script(code);
        return script.runInContext(sharedContext);
    }
    catch(err) {
        console.error(err);
        throw err;
    }
}

const script1 = "console.log('Script 1:', utils.formatNumber(1234567.89));";
const script2 = "console.log('Script 2:', utils.formatDate(new Date()));";

runWithSharedContext(script1);
runWithSharedContext(script2);
