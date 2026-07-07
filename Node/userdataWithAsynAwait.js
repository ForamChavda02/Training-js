const takeUser = (userId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("inside promise of takeUser");
            if(userId === 99) {
                reject(new Error("User not found"));
            }
            else {
                resolve({id: userId, name:"Aryan", type:"premium"})
            }
        }, 2000);
    });
};

const takeOrder = (userType) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`take order from user ${userType} user`);
            const order = ["Laptop", "Mouse", "keyboard"];
            resolve(order);
        }, 2000)
    });
};

async function displayDashboardId(id) {
    try {
        console.log("inside displaydashboard id");

        const user = await takeUser(id);
        console.log(`Welcome back ${user.name}`);

        const orders = await takeOrder(user.type);
        console.log("your orders:", orders);

        console.log("Dashboard loded successfully\n");
    } catch(error) {
        console.log(`error: ${error}`);
    }
}

async function runPractice() {
    console.log("-----TEST 1: Valid user -----");
    await displayDashboardId(1);

    console.log("test 2");
    await displayDashboardId(99);
}
runPractice();