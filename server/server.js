/**
 * Created by mike on 8/27/15.
 */
//ExpressJS app includes
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var body = require("body-parser");

//Add to application
var app = express();
app.use(cors());
app.use(body());

// Mongodb connector
var databaseUrl = "mongodb://localhost/pwdb";
mongoose.connect(databaseUrl);
console.log("Database connected at: " + databaseUrl);

// Mongodb models
var Post = mongoose.model("Post", {title: String});

// REST CALLS
app.get("/post", function (req, res) {
    Post.find(function (error, products) {
        res.send(products);
    });
});
app.post("/post", function (req, res) {
    var title = req.body.title;
    var post = new Post({title: title});
    post.save(function (err) {
        //console.error(err);
        res.send(); // respond with nothing
    });
});

app.delete("/post", function (req, res) {
    var str = "{_id :" + "ObjectId(" + "\"" + req.body + "\"" + ")" + "}";
    console.log(str);
    Post.remove(str, function (err) {
            if (err) {
                console.error(err);
                res.send(err);
            } else {
                console.log("Deleted successfully");
            }
        }
    );
});

//Fire up node server
var port = 3000;
app.listen(port);
console.log("Server started on port: " + port);

