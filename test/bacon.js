'use strict';

const should = require('chai').should();
const Bacon = require('../src/index').Bacon;

describe('Baconian Cipher', () => {

  describe('#encrypt', () => {
    it('correctly translates text with no spaces', () => {
      Bacon.encrypt('Hello').should.eql('AABBBAABAAABABBABABBABBBA');
      Bacon.encrypt('howdy').should.eql('AABBBABBBABABBAAAABBBBAAA');
    });
    it('correctly translates and removes numbers and special characters', () => {
      Bacon.encrypt('**myNameIs42**').should.eql('ABBAABBAAAABBABAAAAAABBAAAABAAABAAABAABA');
      Bacon.encrypt('Hi90').should.eql('AABBBABAAA');
    });
    it('throws TypeError on non-string value', () => {
      (() => Bacon.encrypt({})).should.throw(TypeError);
      (() => Bacon.encrypt(90)).should.throw(TypeError);
    });
    it('returns undefined if no text given, or only numbers/special chars with no letters', () => {
      Bacon.encrypt('').should.eql(undefined);
      Bacon.encrypt('+42**&#!').should.eql(undefined);
    });
    it('retains spaces', () => {
      Bacon.encrypt('HI THERE').should.eql('AABBBABAAA BAABBAABBBAABAABAAABAABAA');
    });
  });

  describe('#decrypt', () => {
    it('correctly translates text with no spaces', () => {
      Bacon.decrypt('AABBBAABAAABABBABABBABBBA').should.eql('HELLO');
      Bacon.decrypt('AABBBABBBABABBAAAABBBBAAA').should.eql('HOWDY');
    });
    it('retains spaces in translation', () => {
      Bacon.decrypt('AABBBABAAA BAABBAABBBAABAABAAABAABAA').should.eql('HI THERE');
    });
    it('throws TypeError on non-string value', () => {
      (() => Bacon.decrypt({})).should.throw(TypeError);
      (() => Bacon.decrypt(42)).should.throw(TypeError);
    });
    it('returns undefined if no text given, or only numbers/special chars with no letters', () => {
      (typeof Bacon.decrypt('')).should.eql('undefined');
      (typeof Bacon.decrypt('4242**')).should.eql('undefined');
    });
    it('returns undefined when no `letters` given', () => {
      (typeof Bacon.decrypt('AAAA')).should.eql('undefined');
    });
  });
});