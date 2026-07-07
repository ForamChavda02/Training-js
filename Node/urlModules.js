const { URL } = require("url");

const myURL = new URL("http://localhost:3000/users?id=5&name=foram");

//console.log(myURL);

console.log(myURL.pathname);

console.log(myURL.searchParams.get("id"));

console.log(myURL.searchParams.get("name"));

for(const [key, value] of myURL.searchParams) {
    console.log(key, value);
}

myURL.searchParams.append("page", 2);

console.log(myURL.toString());