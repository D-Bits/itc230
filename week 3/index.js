
'use strict'

var routes = require('./routes');

//require express
const express = require("express");

const handlebars = require('express-handlebars');

const app = express();

app.set('port', process.env.PORT || 3000);

// get home.html
app.get('/', (req, res) => {
 res.type('text/html');
 res.sendFile(__dirname + '/public/home.html'); 
});

// 404 error page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

//500 error page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.post('/get', function (req, res) {
    var quark = quarks;
}

//listen on port 3000
app.listen(app.get('3000'), function(){
   console.log() 
});