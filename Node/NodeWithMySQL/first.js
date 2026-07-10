let mysql = require("mysql2");

let con = mysql.createConnection({
    host: "localhost",
    user: "node_user",
    password: "123"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("connected!");
    con.query("CREATE DATABASE nodedb", function(err, result) {
        if(err) throw err;
        console.log("Database created");
    });
});