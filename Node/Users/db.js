const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "nodeuser",
    password: "123",
    database: "auth_db"
});

db.connect((err) => {
    if(err) {
        console.log(err.message);
        return;
    }
    console.log("MYsql connection strated")
});

module.exports = db;