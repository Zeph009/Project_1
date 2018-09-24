/**
*   @author Daniel King
*   @version 0.0.1
*   @summary Project 1 || created: 09.12.2018
*/

"use strict";
const PROMPT = require('readline-sync');

let bedrooms, bathrooms, garageSize, lotNumber;
let total=50000;



function main() {
    setLotnumber();
    setBedrooms();
    setBathrooms();
    setGarageSize();
//    setTotal();
    printResults();
}

main();


/*function setAge(currentYear) {
    let year = PROMPT.question(`\nWhat year were you born?: `);
    age = currentYear - year;
}*/

function setLotnumber() {
   lotNumber = PROMPT.question(`\nPlease enter you Lot Number: `);
}

function setBedrooms() {
    bedrooms = PROMPT.question(`\nPlease enter the number of bedrooms: `);
    total = total+bedrooms*17000
}
function setBathrooms() {
    bathrooms = PROMPT.question(`\nPlease enter the number of bathrooms: `);
    total = total+bathrooms * 12500
}
function setGarageSize() {
    garageSize = PROMPT.question('\nPlease enter how many cars is your Garage')
    total = total+garageSize*6000
}
function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log("your lot number is "+ lotNumber);
    console.log("your total is "+ total)
}

/*
This program is designed to demonstrate very basic coding paradigms
Topics: code layout, declaring/initializing global/local variables/constants, parameters, modularization & dispatching
          comments (single/multi line, JSDoc), pragmas, data types
 */