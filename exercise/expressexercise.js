var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("hi, there, welcome to my assignment");
});

app.get("/speak/:name", function(req, res){
    var name = req.params.name.toLowerCase();
    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof woof"
    }
    var sound = sounds[name];
    res.send("the " + name + " says " + sound );
});

app.get("/repeat/:name/:num", function(req, res){
    var name = req.params.name;
    var num = Number(req.params.num);
    var str = "";
    for(var i = 0; i< num; i++){
        str = str + name + " ";
    }
    res.send(str);
});

app.get("*", function(req, res){
    res.send("sorry,page not found");
});

app.listen(process.env.PORT, process.env.IP);