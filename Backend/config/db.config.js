const mysql = require('mysql2');


const dbConn = mysql.createPool({
  connectionLimit : 5, //important
    host: process.env.DB_host,
    user: process.env.DB_user,
     database: process.env.DB_Database,
     password: process.env.DB_Password,
     debug    :  false
});


module.exports = dbConn;

