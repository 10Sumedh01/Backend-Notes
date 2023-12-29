// template js => ejs
// ejs is html with some super powers (e.g. calculation) and also we can say advance version of html

// Steps to setup ejs:
// 1.npm install ejs
// 2.Configure ejs =>app.set("view engine", "ejs");
// 3.Create a new folder name views
// 4.Create ejs files in that folder
// 5.Send instead of render

const express = require("express");
const app = express();

//configuring Ejs
app.set('view engine', 'ejs');

// This is server main page
app.get("/", (req, res) => {
  res.render("index.ejs",{name:"Sumedh"}); //make sure every file name is from the folder 'views'
});

app.listen(3000);

