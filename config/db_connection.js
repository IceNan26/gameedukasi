const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'containers-us-west-39.railway.app', // Hostname or IP address without the port
  port: 6161, // Port number of the MySQL server
  user: 'root',
  password: 'mEnOxBpXX1KRj1I9cU35',
  database: 'railway',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

const connection = pool.getConnection()

module.exports = pool;
