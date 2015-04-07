'use strict';

var expect = require('chai').expect;

describe('env require: ', function(){

var envRequire = require('../index.js');

    it('should take an array', function(){
    
        process.env['one'] = 'one';
        process.env['two'] = 'two';

        var goodInput = function(){
            envRequire(['one', 'two']);
        };

        var badInput = function(){
            envRequire('someString');
        };

        expect(goodInput).to.not.throw();
        expect(badInput).to.throw();
    });
    
    it('should complain when environmental parameters are not available', function(){

        process.env['two'] = 'two';

        var badSetup = function(){
            envRequire(['one', 'two', 'three']);
        };
        
        expect(badSetup).to.throw();
    });

    it('should not complain when environmental parameters are available', function(){

        process.env['one'] = 'one';
        process.env['two'] = 'two';
        process.env['three'] = 'three';

        var goodSetup = function(){
            envRequire(['one', 'two', 'three']);
        };
        
        expect(goodSetup).to.not.throw();
    });

});
