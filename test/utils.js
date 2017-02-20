'use strict';

const should = require('chai').should();
const utils  = require('../utils');

describe('Utility Methods', () => {

  describe('#numToChar', () => {
    it('returns correct characters for specific numbers', () => {
      utils.numToChar(0).should.eql('A');
      utils.numToChar(10).should.eql('K');
      utils.numToChar(25).should.eql('Z');
    });
  });


  describe('#charToNum', () => {
    it('returns numbers in 0-25 range for a-z', () => {
      utils.charToNum('a').should.eql(0);
      utils.charToNum('k').should.eql(10);
      utils.charToNum('z').should.eql(25);
    });

    it('returns numbers in 0-25 range for A-Z', () => {
      utils.charToNum('A').should.eql(0);
      utils.charToNum('K').should.eql(10);
      utils.charToNum('Z').should.eql(25);
    });
  });


  describe('#numArrayToString', () => {
    it('returns correct string for an array of 0-25 numbers', () => {
      utils.numArrayToString([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])
        .should.eql('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
  });


  describe('#stringToNumArray', () => {
    it('returns correct number array for string for A-Z string', () => {
      utils.stringToNumArray('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
        .should.eql([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);
    });

    it('returns correct number array for string for a-z string', () => {
      utils.stringToNumArray('abcdefghijklmnopqrstuvwxyz')
        .should.eql([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);
    });
  });


  describe('#bringInRange', () => {
    it('mods a given number by 26', () => {
      utils.bringInRange(10).should.eql(10);
      utils.bringInRange(25).should.eql(25);
      utils.bringInRange(26).should.eql(0);
      utils.bringInRange(27).should.eql(1);
      utils.bringInRange(53).should.eql(1);
    });

    it('works with negative numbers', () => {
      utils.bringInRange(-10).should.eql(16);
      utils.bringInRange(-25).should.eql(1);
      utils.bringInRange(-26).should.eql(0);
      utils.bringInRange(-27).should.eql(25);
      utils.bringInRange(-53).should.eql(25);
    });
  });


  describe('#cleanString', () => {
    it('upcases simple strings', () => {
      utils.cleanString('hello').should.eql('HELLO');
    });

    it('does nothing for already upcased strings', () => {
      utils.cleanString('SOMETHING').should.eql('SOMETHING');
    });

    it('removes all characters other than alphabets', () => {
      utils.cleanString('this has w3!4d c#aract3rs').should.eql('THISHASWDCARACTRS');
    });
  });


  describe('#getSubstitutionMapFromKey', () => {
    it('returns the complete alphabet for empty key', () => {
      utils.getSubstitutionMapFromKey('').should.eql('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('returns correct mappings for simple keys', () => {
      utils.getSubstitutionMapFromKey('ZEBRAS').should.eql('ZEBRASCDFGHIJKLMNOPQTUVWXY');
    });

    it('returns correct mappings for keys with repeated characters', () => {
      utils.getSubstitutionMapFromKey('HELLOHOWAREYOU').should.eql('HELOWARYUBCDFGIJKMNPQSTVXZ');
    });

    it('returns correct mappings for keys with special characters', () => {
      utils.getSubstitutionMapFromKey('Th!5 I5 4 w3!Rd K3y').should.eql('THIWRDKYABCEFGJLMNOPQSUVXZ');
    });
  });

});

