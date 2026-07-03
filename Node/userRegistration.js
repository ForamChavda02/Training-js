function saveUser(name, callback) {
    console.log("Saving user...");

    setTimeout(() => {
        console.log(`${name} has been svaed`);
        callback();
    }, 2000);
}

function sendEmail(callback) {
    console.log("Sending welcome eamil...");

    setTimeout(() => {
        console.log("got email");
        callback();
    }, 2000);
}

function loginUser() {
    console.log("logedIn");

    setTimeout(() => {
        console.log("login successful");
    }, 2000);
}

saveUser("Foram", () => {
    sendEmail(() => {
        loginUser();
    });
});

