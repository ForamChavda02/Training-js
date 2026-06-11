const name = prompt("Enter your name:");
alert("welcome" + name);
const linkJS = confirm("Do you like javascript");
if(linkJS) {
    console.log(name + "like js");
}
else {
    console.log(name + "Do not like js");
}

localStorage.setItem("username", name);
const savedName = localStorage.getItem("username");
console.log("Saved User:", savedName);

console.log("current URL:" ,location.href);
console.log("HostName:", location.hostname);
console.log("Path:", location.pathname);

setTimeout(() => {
    console.log("this text appear after 3 seconds");
} ,3000);

let count = 1;

const interValid = setInterval(() => {
    console.log("counter:" ,count);
    count ++;
    if(count > 5) {
        clearInterval(interValid);
        console.log("Counter stopped");
    }
} ,1000);

async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        console.log("users:", users);
        users.forEach(user => {
            console.log(user.name);
        });
    }
    catch(error) {
        console.log("Error:", error);
    }
}
getUsers();