//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/",function(req,res) {
  var today = new Date();
  var options = {weekday:"long", month:"long", day:"numeric"};
  var day = today.toLocaleDateString("en-US", options);

  res.render('list',{kindOfDay: day, newListItems: items});
});

app.post("/",function(req,res){
  var item = req.body.newItem;
  items.push(item);

  res.redirect('/');
});



app.listen(3000,function() {
  console.log("Server started on port 3000.");
});