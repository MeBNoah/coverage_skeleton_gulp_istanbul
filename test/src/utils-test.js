'use strict';

var utils = require('../../src/utils');
var chai = require('chai');

var expect = chai.expect;

describe('utils', function () {
    describe('sum', function () {
        it('works', function (done) {
            expect(utils.sum(1,2)).to.equal(3);
            done();
        });
    });
});
