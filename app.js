var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

    app.use(express.static(__dirname + "/public"));
    app.use(bodyParser.urlencoded({extended: true}));

    // app.get('/', function(req, res) {
    //     res.render('home')
    // })