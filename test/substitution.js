'use strict';

const should       = require('chai').should();
const Substitution = require('../src/index').Substitution;

describe('Simple Substitution Cipher', () => {

  describe('#encrypt', () => {
    it('works for simple keys', () => {
      Substitution.encrypt('CIPHER',        'KEY').should.eql('YGOFBQ')
      Substitution.encrypt('DAMNNNNSON', 'ZEBRAS').should.eql('RZJKKKKPLK')
    });

    it('retains plaintext spaces in ciphertexts', () => {
      Substitution.encrypt('MY SUPER SECRET MESSAGE', 'FOXES')
        .should.eql('JY QTMSP QSXPSR JSQQFBS')
    });

    it('works for keys with repeating characters', () => {
      Substitution.encrypt('ANOTHER MESSAGE THAT CONTAINS SUPER SECRET DATA', 'HELLOHOWAREYOU')
        .should.eql('HGIPYWM FWNNHRW PYHP LIGPHUGN NQJWM NWLMWP OHPH')
    });

    it('removes numbers and special characters from ciphertexts and keys', () => {
      Substitution.encrypt('SUBSTITUTION CIPHER', 'Th!5 I5 4 w3!Rd K3y').should.eql('OQHOPAPQPAJG IALYRN')
      Substitution.encrypt('my 53cR3t m3554g3',            'secret key').should.eql('HX CNP HY')
    });
  });


  describe('#decrypt', () => {
    it('works for simple keys', () => {
      Substitution.decrypt('YGOFBQ',        'KEY').should.eql('CIPHER')
      Substitution.decrypt('RZJKKKKPLK', 'ZEBRAS').should.eql('DAMNNNNSON')
    });

    it('retains ciphertext spaces in plaintext', () => {
      Substitution.decrypt('JY QTMSP QSXPSR JSQQFBS', 'FOXES')
        .should.eql('MY SUPER SECRET MESSAGE')
    });

    it('works for keys with repeating characters', () => {
      Substitution.decrypt('HGIPYWM FWNNHRW PYHP LIGPHUGN NQJWM NWLMWP OHPH', 'HELLOHOWAREYOU')
        .should.eql('ANOTHER MESSAGE THAT CONTAINS SUPER SECRET DATA')
    });

    it('removes numbers and special characters from ciphertexts and keys', () => {
      Substitution.decrypt('OQHOPAPQPAJG IALYRN', 'Th!5 I5 4 w3!Rd K3y').should.eql('SUBSTITUTION CIPHER')
      Substitution.decrypt('HX 53CN3P H3554Y3',            'secret key').should.eql('MY CRT MG')
    });
  });

});

