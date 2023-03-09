var mysql = require("mysql");

var config = mysql.createConnection({
  host: "db4free.net",
  user: "rashan",
  password: "dYY2z5z292rn6Yw",
  database: "emp_ms",
});

module.exports = config;
