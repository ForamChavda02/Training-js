function receiveOrder(order, callback) {
    console.log("receiving order...");

    setTimeout(() => {
        const goodfoodCondition = true;

        if(goodfoodCondition) {
            callback(null);
        }
        else {
            callback("food is burned");
        }
    }, 2000);
}

function checkFood(order, callback) {
    console.log("preparing food");

    setTimeout(() => {
        const orderFood = true;
        if(orderFood) {
            callback(null)
        }
        else {
            console.log("food is not available");
        }
    }, 2000);
}

function packFood(order, callback) {
    console.log("packing your fav meal");

    setTimeout(() => {
        const packedFood = true;
        if(packFood) {
            callback(null, order);
        }
        else {
            console.log("please wait");
        }
    }, 2000);
}

function deliverFood(order, callback) {
    console.log("food is out for delivery");

    setTimeout(() => {
        const delivered = true;
        if(delivered) {
            callback(null);
        }
        else {
            console.log("wait few more seconds");
        }
    }, 2000);
}

const order = {
    customer: "Foram",
    item: "Burger"
};

receiveOrder(order, (err, customerData) => {
    if(err) {
        console.log(err);
        return;
    }
    checkFood(order, (err, customerData) => {
        if(err) {
            console.log(err);
            return;
        }
        packFood(order, (err, customerData) => {
            if(err) {
                console.log(err);
                return;
            }
        deliverFood(customerData, (err) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log("enjoy your meal");
        }) 
        })
    })
})