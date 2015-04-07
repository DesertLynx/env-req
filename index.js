'use strict';

var _ = require('lodash');
var util = require('util');

module.exports = function(inputArray){

    if(!util.isArray(inputArray))
        throw "env-require requires an array input";

    var intersection = _.intersection(Object.keys(process.env), inputArray);
    var subtraction = _.difference(inputArray, intersection);

    if(subtraction.length > 0) {
        var message = "Fatal Error: Missing the following environment variables:\n";
        subtraction.forEach( function(ea) { message += '\t -> ' + ea + "\n"; } );
        throw message; 
    }
};
