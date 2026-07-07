const { setInterval } = require("timers/promises");

async function greeting(){
    console.log("start of interval...");

    const interval = setInterval(1000, "tick");

    let counter = 0;

    for await (const tick of interval) {
        console.log(counter + 1, tick);
        counter++;

        if(counter > 5) {
            break;
        }
    }
    console.log("interval finished");
}
greeting().catch(console.error);