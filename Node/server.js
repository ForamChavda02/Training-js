const http = require("http");
const path = require("path");
const { URL } = require("url");

let students = [
    {id: 1, name: "tony" , age: 20},
    {id: 2, name: "thor", age: 21}
];

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    console.log("Headers:", req.headers);

    res.setHeader("X-Powered-By", "Node.js");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    const parsedURL = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedURL.pathname;
    const query = Object.fromEntries(parsedURL.searchParams);

    if(pathname === "/" && req.method === "GET") {
        res.writeHead(200);

        res.end(JSON.stringify({
            message: "Welcome",
            method: req.method,
            path: pathname
        }));
    }

    else if(pathname === "/students" && req.method === "GET") {
        res.writeHead(200);

        res.end(JSON.stringify(students, null, 2));
    }

    else if(pathname === "/search" && req.method === "GET") {
        res.writeHead(200);

        res.end(JSON.stringify({
            query
        }, null, 2));
    }

    else if(pathname === "/students" && req.method === "POST") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            const updateStudent = JSON.parse(body);
            const id = updateStudent.id;

            const index = students.findIndex(s => s.id === id);

            if(index === -1) {
                res.writeHead(404);

                return res.end(JSON.stringify({
                    message: "Student not found"
                }));
            }

            students[index] = {
                ...students[index],
                ...updateStudent
            };

            res.writeHead(200);

            res.end(JSON.stringify(students[index]));
        });
    }

    else if(pathname.startsWith("/students") && req.method === "DELETE") {
        const id = Number(pathname.split("/")[2]);

        const index = students.findIndex(s => s.id === id);

        if(index === -1) {
            res.writeHead(404);

            return res.end(JSON.stringify({
                message: "Student not found"
            }));
        }
        students.splice(index, 1);

        res.writeHead(200);

        res.end(JSON.stringify({
            message: "Student deleted"
        }));
    }

    else {
        res.writeHead(404);

        res.end(JSON.stringify({
            message: "Route Not Found"
        }));
    }
});
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});