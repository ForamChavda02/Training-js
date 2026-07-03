function checkBalance() {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            resolve(5000);
        }, 2000);
    });
}

function withdraw(balance, amount) {
    return new Promise((resolve, reject) => {
        if(balance >= amount) {
            resolve("Money withdrawn");
        }
        else {
            reject("Insufficient Balance");
        }
    });
}

async function atm() {
    try {
        const balance = await checkBalance();
        console.log("balance:", balance);

        const result = await withdraw(balance, 5000);
        console.log(result);
    }catch(error) {
        console.log(error);
    }
}

atm();