const mysql = require("mysql2/promise");

const mySqlPool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root", // Ensure this matches the actual MySQL password
    database: "mess_management_system",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = mySqlPool;
