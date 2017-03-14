'use strict';

const should = require('chai').should();
const Affine = require('../src/index').Affine;

describe('Affine Cipher', () => {

  describe('#encrypt', () => {
    it('throws error if "a" key is not coprime with 26', () => {
      ( () => Affine.encrypt('HELLO', 2, 10) ).should.throw(RangeError);
      ( () => Affine.encrypt('HELLO', 8, 23) ).should.throw(RangeError);
      ( () => Affine.encrypt('HELLO', 13, 5) ).should.throw(RangeError);
    });

    it('throws error if "b" key is not between 0-25', () => {
      ( () => Affine.encrypt('HELLO', 1,  30) ).should.throw(RangeError);
      ( () => Affine.encrypt('HELLO', 11, 55) ).should.throw(RangeError);
    });

    it('correctly encrypts plaintexts for valid keys', () => {
      Affine.encrypt('HELLO',          1,  5).should.eql('MJQQT');
      Affine.encrypt('SECRETMESSAGE', 15, 25).should.eql('JHDUHYXHJJZLH');
    });

    it('retains plaintext\'s spaces', () => {
      Affine.encrypt('A B C D E F', 3, 10).should.eql('K N Q T W Z');
    });

    it('removes all numbers and special characters', () => {
      Affine.encrypt('T#!5 I5 A W3!RD K3Y', 19, 20).should.eql('R Q U WFZ CI');
    });
  });

  describe('#decrypt', () => {
    it('throws error if "a" key is not coprime with 26', () => {
      ( () => Affine.decrypt('HELLO', 2, 10) ).should.throw(RangeError);
      ( () => Affine.decrypt('HELLO', 8, 23) ).should.throw(RangeError);
      ( () => Affine.decrypt('HELLO', 13, 5) ).should.throw(RangeError);
    });

    it('throws error if "b" key is not between 0-25', () => {
      ( () => Affine.decrypt('HELLO', 1,  30) ).should.throw(RangeError);
      ( () => Affine.decrypt('HELLO', 11, 55) ).should.throw(RangeError);
    });

    it('correctly decrypts ciphertexts for valid keys', () => {
      Affine.decrypt('MJQQT',          1,  5).should.eql('HELLO');
      Affine.decrypt('JHDUHYXHJJZLH', 15, 25).should.eql('SECRETMESSAGE');
    });

    it('retains plaintext\'s spaces', () => {
      Affine.decrypt('K N Q T W Z', 3, 10).should.eql('A B C D E F');
    });

    it('removes all numbers and special characters', () => {
      Affine.decrypt('R%9 Q0 @U W!F#Z C?I', 19, 20).should.eql('T I A WRD KY');
    });
  });
});

