function login(username, password) {
    return new Promise((resolve, reject) => {
        if(username === "Foram" && password === 1234) {
            resolve("Login successfull");
        }
        else {
            reject("Invalid Credentials");
        }
    });
}

login("Foram", 1234)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});