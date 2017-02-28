'use strict';

const should   = require('chai').should();
const Vigenere = require('../index').Vigenere;

describe('Vigenere Cipher', () => {

  describe('#encrypt', () => {
    it('correctly encrypts plaintexts for valid key', () => {
      Vigenere.encrypt('MANHATTAN',            'CODE').should.eql('MJQQT');
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

});


