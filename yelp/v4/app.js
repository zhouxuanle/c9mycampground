var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
Campground = require("./models/campground"),
Comment = require("./models/comment"),
seedDB =require("./seeds")

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
console.log(__dirname);


//Campground.create({
//    name: "Tom", 
//    image:"https://www.samcodes.co.uk/project/geometrize-haxe-web/assets/images/xseagull.jpg.pagespeed.ic.iK66EGA15-.jpg",
//    description: "This is a huge granite hill, no bathroom, no water, beautiful granite"
//}, function(err, campground){
//    if(err){
//        console.log(err);
//    }else{
//        console.log("CAMPGROUND CREATED");
//        console.log(campground)
//    }
//});



app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allcampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("campgrounds/index", {campgrounds:allcampgrounds});
            console.log(allcampgrounds);
        }
    });
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function(req, res){
    res.render("campgrounds/new");
});

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        } else{
            res.render("campgrounds/show", {campground: foundCampground});
        }
    })

});

app.get("/campgrounds/:id/comments/new", function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else{
            res.render("./comments/new", {campground: campground});
        }
    });
    
});

app.post("/campgrounds/:id/comments", function(req, res){
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else{
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else{
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/"+ campground._id);
                }
            })
        }
    });
});
app.listen(process.env.PORT, process.env.IP);