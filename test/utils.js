'use strict';

const should = require('chai').should();
const utils  = require('../index').utils;

describe('utils', () => {

  describe('#numToChar', () => {
    it('returns correct characters for specific numbers', () => {
      utils.numToChar(0).should.equal('A');
      utils.numToChar(10).should.equal('K');
      utils.numToChar(25).should.equal('Z');
    });
  });


  describe('#charToNum', () => {
    it('returns numbers in 0-25 range for a-z', () => {
      utils.charToNum('a').should.equal(0);
      utils.charToNum('k').should.equal(10);
      utils.charToNum('z').should.equal(25);
    });

    it('returns numbers in 0-25 range for A-Z', () => {
      utils.charToNum('A').should.equal(0);
      utils.charToNum('K').should.equal(10);
      utils.charToNum('Z').should.equal(25);
    });
  });


  describe('#numArrayToString', () => {
    it('returns correct string for an array of 0-25 numbers', () => {
      utils.numArrayToString([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
        .should.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
  });

});

