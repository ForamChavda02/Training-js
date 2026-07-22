const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "ecommerce"
});

db.connect((err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Database connected");
});

module.exports = db;