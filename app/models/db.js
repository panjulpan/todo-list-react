const mysql = require('mysql');
const dbConfig = require('../config/db_config.js');

var connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});

module.exports = connection;