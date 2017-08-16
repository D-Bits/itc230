
var countries = require("./models/countries.js");

countries.find((err, result) => {
    if(err) {
        console.log(err);
    } else {
        console.log(result);
    }
});