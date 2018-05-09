var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("hi there");
});

app.get("/:bye", function(req, res){
    res.send("goodbye");
    console.log("aaa")
});

app.get("*", function(req, res){
    res.send("you are a star");
});
app.listen(process.env.PORT, process.env.IP);