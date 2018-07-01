//mySQL queries

//require connection to mySQL database
var connection = require("./connection.js");

var orm = {

    
    selectAll: function (cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            if(cb){cb(result);}
        });
    },

    insertItem: function (nameValue, eatenValue) {
        var queryString = "INSERT INTO burgers (burger_name, eaten) VALUES (?, ?)";
        connection.query(queryString, [nameValue, eatenValue], function(err) {
            if (err) throw err;
        });
    },

     updateItem: function (id) {

        console.log("in orm id:          "+id+"          \n\n\n");
        var queryString = "UPDATE burgers SET eaten = 1 WHERE id = ?";
        connection.query(queryString, [id], function(err) {
           if (err) throw err;
            
          });
     }
    }
  

module.exports = orm;