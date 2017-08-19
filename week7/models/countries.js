
var mongoose = require('mongoose');

// connection to MLab Mongo DB
var connectionString = "mongodb://230user:230pass@ds123933.mlab.com:23933/itc230";

var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } } };

mongoose.connect(connectionString, options);

var conn = mongoose.connection; 
conn.on('error', console.error.bind(console, 'connection error:'));

//Schema for North American countries
var NAschema = mongoose.Schema({
    name: { type: String, required: true },
    population: { type: Number, required: true }

},{collection:'NorthAmerica'}
);

//export the schema
module.exports = mongoose.model('countries', NAschema);
