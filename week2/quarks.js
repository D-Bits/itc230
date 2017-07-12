
'use strict'

// The quarks of the Standard Model
let quarks = [
    {name: "Up", mass:"2.3 MeV", generation:"1st"},
    {name: "Down", mass:"4.8 MeV", generation:"1st"},
    {name: "Strange", mass:"95 MeV", generation:"2nd"},
    {name: "Charm", mass:"1.27 GeV", generation:"2nd"},
    {name: "Bottom", mass:"4.2 GeV", generation:"3rd"},
    {name: "Top", mass:"173.1 GeV", generation:"3rd"} // Most massive particle in the Standard Model
    ];

//Get all entries   
exports.getAll = () => {
    return quarks;
};

// Get one entry
exports.get = (name) => {
    return quarks.find((item) => {
       return item.name === name; 
    });
};

// Delete an entry
exports.delete = (name) => {
    return quarks.filter((item) => {
        return item.name!=name;
    });
};

console.log(this.delete("Down"));