var express = require("express");
var app = express();
var port = 3000;

const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "/assets")));
app.use('/assets',express.static(__dirname+'/assets'));


// make uploads path available to browser
app.use('/Media',express.static(__dirname+'/Media'));





// connect to db

const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/viraj");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error connecting to MongoDB"));
db.once("open", function () {
  console.log("Connected to Datebase :: MongoDB");
});



app.use("/", require("./routes"));

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
