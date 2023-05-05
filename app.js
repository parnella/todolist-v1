//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items = [];
const workItems = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/",function(req,res) {
  //date() is the function that is exported in date.js after requiring the date module into the const date previously.
  // Since there are now two functions exported in date.js, the date module is a JS object and the specific function is
  //accessible with object notation (i.e. date.getDate() and date.getDay())
  const day = date.getDate();
  
  res.render('list',{listTitle: day, newListItems: items});
});

app.get("/work",function(req,res) {
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about",function(req,res) {
  res.render("about");
})

app.post("/",function(req,res){
  const item = req.body.newItem;

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
