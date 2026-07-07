function debounc(func, delay) {
    let timeoutId;
    return function(...args) {
        cleareTimeout(timeoutId);
        timeoutId = setImmediate(() => {
            func.apply(this, args), delay
        });
    }
}

const handleResize = debounc(() => {
    console.log("resize");
}, 300);