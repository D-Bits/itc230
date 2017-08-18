
'use strict';

var countries = require("./models/countries.js");

const express = require("express");

const handlebars = require('express-handlebars');

const app = express();

//establish routes
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/../public'));
app.use(require("body-parser").urlencoded({extended: true}));
app.use((err, req, res, next) => {
  console.log(err)
});

//handlebars configuration
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

// find all countries (in N. America)
app.get('/', (req,res) => {
   countries.find((err,result) => {
        console.log(result);
        if (err) return next(err);
        res.render('home', {countries: JSON.stringify(result) });    
    });
    
});

//find individual countries
app.get('/detail', (req, res) =>{
        countries.findOne({ name:req.query.country }, (err, country) => {
        if (err) return next(err);
        res.type('text/html');
        res.render('detail', {result: country} ); 
    });
});

// delete nation route

app.get('/delete', (req,res) => {
    countries.remove({ name:req.query.country }, (err, result) => {
        if (err) return next(err);
        let deleted = result.result.n !== 0; // n will be 0 if no docs deleted
        countries.count((err, total) => {
            res.type('text/html');
            res.render('delete', {country: req.query.country, deleted: result.result.n !== 0, total: total } );    
        });
    });
});

//listen on port 3000
app.listen(app.get('port'), function(){
   console.log() 
});