var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser");

    app.use(express.static(__dirname + "/clients"));
    app.set("view engine", "ejs");
    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/', function(req, res) {
        res.render('index.ejs')
    })


    app.listen(5000, function(){
        console.log("Mattertag server on");
     });