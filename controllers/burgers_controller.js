var express = require("express");
var router = express.Router();
var burgerModel = require("../models/burger.js");

//express routes 

router.get("/", function (req, res) {
    burgerModel.selectAll(function (data) {
        var allBurgers = { burgers: data };

        console.log(JSON.stringify(data));
        
        allBurgers.burgers.forEach(burger => {
            burger.devoured = parseInt(burger.devoured);
        });

        res.render("index", allBurgers);
    });

});

router.post("/", function (req, res) {
    burgerModel.insertItem(req.body.addBurger);
    
    res.redirect("/");
});

router.put("/:id", function (req, res) {

    console.log(req.params.id);

    
    burgerModel.updateItem(req.params.id);

    res.redirect("/");

});

module.exports = router;