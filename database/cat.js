var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app")
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

var george = new Cat({
    name: "George",
    age: 11,
    temperament: "Grouchy"
});

console.log("here to start");

Cat.create({
   name: "Snow White",
   age: 15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

console.log("where is it?")

Cat.find({},function(err, cat){
    if(err){
        console.log("oh no,error!");
        console.log(err);
    }else{
        console.log("all the cats");
        console.log(cat);

    }
});

