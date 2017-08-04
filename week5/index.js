var express = require("express");
var countries = require("../models/countries.js");

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/../public'));
app.use(require("body-parser").urlencoded({extended: true}));
app.use((err, req, res, next) => {
  console.log(err)
});

// use handlebars for templating
let handlebars = require("express-handlebars");

// find all countries (in N. America)
app.get('/', (req,res) => {
    countries.find;
});