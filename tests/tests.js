'use strict';

var chai = require('chai');
var expect = chai.expect;

chai.should();

function isEvent(num) {
    return num % 2 === 0;
}

describe('isEven', function () {
    it('should return true when number is even', function () {
        isEven(4).should.be.true;
    });
});