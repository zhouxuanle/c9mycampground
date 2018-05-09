var express = require("express");
var app = express();
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
var campgrounds = [
    {name: "Tony", image:"http://saxony-blue.com/data/out/86/5918348-image.jpg"},
    {name: "Tony", image:"https://www.samcodes.co.uk/project/geometrize-haxe-web/assets/images/xseagull.jpg.pagespeed.ic.iK66EGA15-.jpg"},
    {name: "Tony", image:"http://4everstatic.com/pictures/674xX/animals/wildlife/otter,-greeting,-joy-240538.jpg"},
    {name: "Tony", image:"http://saxony-blue.com/data/out/86/5918348-image.jpg"},
    {name: "Tony", image:"https://www.samcodes.co.uk/project/geometrize-haxe-web/assets/images/xseagull.jpg.pagespeed.ic.iK66EGA15-.jpg"},
    {name: "Tony", image:"http://4everstatic.com/pictures/674xX/animals/wildlife/otter,-greeting,-joy-240538.jpg"}
    ]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP);