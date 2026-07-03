function download() {
    console.log("Downloading...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Downloaded");
        }, 2000);
    });
}

function save() {
    console.log("Saving...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Saved");
        }, 2000);
    });
}

function openFile() {
    console.log("Opening...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Opened");
        }, 2000);
    });
}

download()
.then((result) => {
    console.log(result);
    return save();
})
.then((result) => {
    console.log(result);
    return openFile();
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})