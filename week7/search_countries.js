
//require http
var http = require('http'),
    express = require('express'),
    
//use port 3000
var app = express();
app.set('port', process.env.PORT || 3000);

//use handlebars
var ex-handlebars = require('express-handlebars').create({extname: '.hbs'});
app.engine('hbs', handlebars.engine); 
app.set('view engine', 'hbs');

app.get('/', function(req, res)
    res.type('text/html');
    res.render('search_countries');
});

//GET request for countries
app.get('', function(req,res){
    countries.getCountries(req.params.kw, req.params.loc, function(countries_data) {
        res.send(countries_data);
    });