//use  ORM to interface w/ database

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll(function(res){
            cb(res);
        });
    },

    insertItem: function(newBurger){

        console.log(newBurger);
        orm.insertItem(newBurger,"0");
    },

    updateItem: function(id){

        console.log("updating in models");
        orm.updateItem(id);   
    }
    
};

module.exports = burger;