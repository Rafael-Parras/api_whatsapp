const mySql = require('mysql2/promise');


const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'whatsapp',
    port: 3306
});


module.exports = connection;