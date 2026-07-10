const mysql = require("mysql2");

const con = mysql.createConnection({
    host: "localhost",
    user: "node_user",
    password: "123",
    database: "nodedb"
});

con.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
    let sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
    
    con.query(sql, function(err, result) {
        if(err) throw err;
        console.log("\n--- Users with their Favorite Products ---");
        console.log(result);
        con.end();
    }); 
});