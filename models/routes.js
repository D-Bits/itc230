
//use Express
var express = require('express');

var app = express();

module.exports = function(app) {
  app.get('/', (req,res) => {
    app.render('home');
});

//Express GET routes

app.get('/', function(req,res){
    
    //Get home page
    
});
 
};
