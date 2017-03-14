'use strict';

const should = require('chai').should();
const Caesar = require('../src/index').Caesar;

describe('Caesar Cipher', () => {

  describe('#encrypt', () => {
    it('correctly encrypts one word texts with key less than 26', () => {
      Caesar.encrypt('HELLO', 10).should.eql('ROVVY')
      Caesar.encrypt('HELLO', 20).should.eql('BYFFI')
    });

    it('works with large keys', () => {
      Caesar.encrypt('CAESAR CIPHER', 46).should.eql('WUYMUL WCJBYL')
    });

    it('works with spaces', () => {
      Caesar.encrypt('HE LLO', 10).should.eql('RO VVY')
    });

    it('removes numbers and special characters', () => {
      Caesar.encrypt('W#AT !S T#!5?', 13).should.eql('JNG F G')
    });
  });


  describe('#decrypt', () => {
    it('correctly decrypts one word texts with key less than 26', () => {
      Caesar.decrypt('ROVVY', 10).should.eql('HELLO')
      Caesar.decrypt('BYFFI', 20).should.eql('HELLO')
    });

    it('works with large keys', () => {
      Caesar.decrypt('WUYMULWCJBYL', 46).should.eql('CAESARCIPHER')
    });

    it('works with spaces', () => {
      Caesar.decrypt('RO VVY', 10).should.eql('HE LLO')
    });
  });
});

