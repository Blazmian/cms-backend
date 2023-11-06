const mysql = require('mysql2');

var connection;

module.exports = {

dbConnection: function () {

    connection = mysql.createConnection({
        host: "DB_HOST",
        user: "DB_USER",
        password: "DB_PASS",
        database: 'DB_DATABASE',
    });
    connection.connect();
    return connection;
}

};