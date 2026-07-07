const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function startCoundown(seconds) {
    console.log("inside start count down");

    for(let i = seconds; i > 0; i--) {
        console.log(`${i}`);
        await wait(1000);
    }
    console.log("done");
}

startCoundown(5);