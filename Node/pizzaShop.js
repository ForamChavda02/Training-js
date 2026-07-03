function prepareDough() {
    return new Promise((reslove, reject) => {
        console.log("prepare dough...");

        setTimeout(() => {
            reslove("dough is ready");
        }, 2000);
    });
}

function addTopings() {
    return new Promise((resolve, reject) => {
        console.log("select topings");

        setTimeout(() => {
            resolve("toping added");
        }, 2000);
    });
}

function bakePizaa(callback) {
    return new Promise((resolve, reject) => {
        console.log("pizza is ready for baking");

        setTimeout(() => {
            resolve("pizza is baked");
        }, 2000);
    });
}

function deliverPizza() {
    return new Promise((resolve, reject) => {
        console.log("pizza is ready for delivery");

        setTimeout(() => {
            resolve("Delivered");
        }, 2000);
    });
}

prepareDough()
.then((result) => {
    console.log(result);
    return addTopings();
})
.then((result) => {
    console.log(result);
    return bakePizaa();
})
.then((result) => {
    console.log(result);
    return deliverPizza();
})
.then((result) => {
    console.log(result);
    console.log("order is completed");
})
.catch((error) => {
    console.log("Error:", error);
});