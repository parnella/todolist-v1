//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];
var workItems = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/",function(req,res) {
  var today = new Date();
  var options = {weekday:"long", month:"long", day:"numeric"};
  var day = today.toLocaleDateString("en-US", options);

  res.render('list',{listTitle: day, newListItems: items});
});

app.get("/work",function(req,res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about",function(req,res) {
  res.render("about");
})

app.post("/",function(req,res){
  let item = req.body.newItem;

  if (req.body.list === 'Work') {
    workItems.push(item);
    res.redirect('/work');
  } else {
    items.push(item);
    res.redirect('/');
  }
});

app.listen(3000,function() {
  console.log("Server started on port 3000.");
});
