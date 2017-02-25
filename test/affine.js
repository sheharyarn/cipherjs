'use strict';

const should = require('chai').should();
const Affine = require('../index').Affine;

describe('Affine Cipher', () => {

  describe('#encrypt', () => {
    it('throws error if "a" key is not coprime with 26', () => {
      ( () => Affine.encrypt('HELLO', 2, 10) ).should.throw(TypeError);
      ( () => Affine.encrypt('HELLO', 8, 23) ).should.throw(TypeError);
      ( () => Affine.encrypt('HELLO', 13, 5) ).should.throw(TypeError);
    });

    it('throws error if "b" key is not between 0-25', () => {
      ( () => Affine.encrypt('HELLO', 1,  30) ).should.throw(TypeError);
      ( () => Affine.encrypt('HELLO', 11, 55) ).should.throw(TypeError);
    });

    it('correctly encrypts plaintexts for valid keys', () => {
      Affine.encrypt('HELLO',          1,  5).should.eql('MJQQT');
      Affine.encrypt('SECRETMESSAGE', 15, 25).should.eql('JHDUHYXHJJZLH');
    });

    it('retains plaintext\'s spaces', () => {
      Affine.encrypt('A B C D E F', 3, 10).should.eql('K N Q T W Z');
    });

    it('removes all numbers and special characters', () => {
      Affine.encrypt('T#!5 I5 4 W3!RD K3Y', 19, 20).should.eql('R Q WFZ CI');
    });
  });

});

