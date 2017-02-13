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

});

