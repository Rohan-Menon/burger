var mysql = require("mysql");

var connection;


//ternary for jawsdb
process.env.JAWSDB_URL ? connection = mysql.createConnection(process.env.JAWSDB_URL) : connection = 
mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "burger"
}); 
 

// if(process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } 
// else {
// connection = 
// mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   database: "burgers_db"
// });
// }

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;