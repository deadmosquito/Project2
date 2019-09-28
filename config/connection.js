// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "umpupvfde2cqopi2",
  password: "df72g96rbmoaurus",
  database: "ypn5fnj5gz2s71s4"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
