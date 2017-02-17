'use strict';

const should       = require('chai').should();
const Substitution = require('../index').Substitution;

describe('Substitution Cipher', () => {

  describe('#encrypt', () => {
    it('correctly encrypts one word texts with key less than 26', () => {
      Substitution.encrypt('HELLO', 10).should.eql('ROVVY')
      Substitution.encrypt('HELLO', 20).should.eql('BYFFI')
    });

    it('works with large keys', () => {
      Substitution.encrypt('CAESAR CIPHER', 46).should.eql('WUYMUL WCJBYL')
    });

    it('works with spaces', () => {
      Substitution.encrypt('HE LLO', 10).should.eql('RO VVY')
    });

    it('removes numbers and special characters', () => {
      Substitution.encrypt('W#AT !S T#!5?', 13).should.eql('JNG F G')
    });
  });


  describe('#decrypt', () => {
    it('correctly decrypts one word texts with key less than 26', () => {
      Substitution.decrypt('ROVVY', 10).should.eql('HELLO')
      Substitution.decrypt('BYFFI', 20).should.eql('HELLO')
    });

    it('works with large keys', () => {
      Substitution.decrypt('WUYMULWCJBYL', 46).should.eql('CAESARCIPHER')
    });

    it('works with spaces', () => {
      Substitution.decrypt('RO VVY', 10).should.eql('HE LLO')
    });
  });
});

