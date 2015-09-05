/**
 * Created by mike on 8/27/15.
 */
//ExpressJS app includes
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var body = require("body-parser");
var multer = require("multer");
var fs = require("fs");

//Add to application
var app = express();
app.use(cors());
app.use(body());

// setup multer for file uploads
var done = false;

app.use(multer({
    dest: 'public/photos/',
    rename: function (fieldname, filename) {
        console.log(filename);
        return filename + Date.now();
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' is starting ...');
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path);
        done = true;
    }
}).single('image'));

// Connect to mongodb
var databaseUrl = "mongodb://localhost/pwdb";
mongoose.connect(databaseUrl, function (err) {
    if (err) {
        console.error(err);
        throw err;
    } else {
        console.log("Database connected at: " + databaseUrl);
    }
});

// Mongodb models
var Post = mongoose.model("Post", {title: String});

// OBJECT REST CALLS
app.get("/getAllPosts", function (req, res) {
    Post.find(function (error, products) {
        res.send(products);
    });
});
app.post("/addPost", function (req, res) {
    var title = req.body.title;
    var post = new Post({title: title});
    post.save(function (err) {
        //console.error(err);
        res.send(); // respond with nothing
    });
});

app.post("/removePost", function (req, res) {
    var body = req.body;
    var post = body.post;

    Post.remove({_id: post._id}, function (err) {
            if (err) {
                console.error(err);
                res.send(err);
            } else {
                console.log("Deleted successfully");
                res.send("Deleted Successfully");
            }
        }
    );
});

// IMAGE STORAGE
app.post("/uploadPhoto", function (req, res) {
    //if (done == true) {
    //    console.log(req.files);
    //    res.end("File uploaded.");
    //}
    //res.send("File uploading");
    //res.end();
});

// get file list
app.get("/getListOfPhotos", function (req, res) {
    fs.readdir("public/photos", function (err, items) {
        console.log(items);
        res.send(items);
    });
});

//Fire up node server
var port = 3000;
app.listen(port, function () {
    console.log("Server working on port: " + port);
});


