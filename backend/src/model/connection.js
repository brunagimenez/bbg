const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.HOST,
    user:'root',
    password: process.env.TOKEN_SECRET,
    port: process.env.MYSQL_PORT,
    database:'bbgTechUser'
});

module.exports = connection;