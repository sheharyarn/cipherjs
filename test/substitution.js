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

});

