const { URL, URLSearchParams } = require("url");

const myURL = new URL("https://example.com/?name=Kai&age=30");
const params = new URLSearchParams(myURL.search);

console.log(params.get("name"));
params.append("city", "Stavanger");
params.delete("age");

console.log(params.toString());