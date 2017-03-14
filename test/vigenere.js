'use strict';

const should   = require('chai').should();
const Vigenere = require('../src/index').Vigenere;

describe('Vigenere Cipher', () => {

  describe('#encrypt', () => {
    it('correctly encrypts plaintexts for valid keys', () => {
      Vigenere.encrypt('MANHATTAN',            'CODE').should.eql('OOQLCHWEP');
      Vigenere.encrypt('SUPERSECRETMESSAGE', 'ZEBRAS').should.eql('RYQVRKDGSVTEDWTRGW');
    });

    it('retains spaces', () => {
      Vigenere.encrypt('NEW YORK INSTITUTE OF TECHNOLOGY', 'KEY'            ).should.eql('XIU ISPU MLCXGDYRO SD DIARRMVSEI');
      Vigenere.encrypt('NEW YORK INSTITUTE OF TECHNOLOGY', 'KEY WITH SPACES').should.eql('XIU UWKR ACSVMLEXC KN MLUWNQPGQC');
    });

    it('removes all numbers and special characters', () => {
      Vigenere.encrypt('!M S0 F*CK!NG T!R3D R!G#T N0W', 'AWESOME KEY').should.eql('M O JUYZK DVB RCX FK');
    });
  });

  describe('#decrypt', () => {
    it('correctly decrypts plaintexts for valid keys', () => {
      Vigenere.decrypt('OOQLCHWEP',            'CODE').should.eql('MANHATTAN');
      Vigenere.decrypt('RYQVRKDGSVTEDWTRGW', 'ZEBRAS').should.eql('SUPERSECRETMESSAGE');
    });

    it('retains spaces', () => {
      Vigenere.decrypt('XIU ISPU MLCXGDYRO SD DIARRMVSEI', 'KEY'            ).should.eql('NEW YORK INSTITUTE OF TECHNOLOGY');
      Vigenere.decrypt('XIU UWKR ACSVMLEXC KN MLUWNQPGQC', 'KEY WITH SPACES').should.eql('NEW YORK INSTITUTE OF TECHNOLOGY');
    });

    it('removes all numbers and special characters', () => {
      Vigenere.decrypt('!M &O JUY*ZK D#VB R@CX F%*K', 'AWESOME KEY').should.eql('M S FCKNG TRD RGT NW');
    });
  });

});


