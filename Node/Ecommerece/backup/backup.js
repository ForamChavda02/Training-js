const { exec } = require("child_process");

exec("mysqldump -u root -p123 Ecommerece > backup/Ecommerece.sql", (err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Database backup created");
});