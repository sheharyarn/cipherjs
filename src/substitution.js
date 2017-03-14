'use strict';

const utils = require('./utils');


const Substitution = {
  /**
   * Encrypts a Plaintext with the given string key
   * using a simple Substitution Cipher
   *
   * @param  {string} plaintext
   * @param  {string} key
   * @return {string} ciphertext
   */
  encrypt: (plaintext, key) => {
    const keyMap = utils.getSubstitutionMapFromKey(key);

    return plaintext
      .replace(/\ +/g, ' ')
      .split(' ')
      .map((s)  => utils.stringToNumArray(s))
      .map((na) => na.map((n) => keyMap[n]))
      .map((na) => na.join(''))
      .join(' ');
  },


  /**
   * Decrypts a Ciphertext with the given string key
   * using a simple Substitution Cipher
   *
   * @param  {string} ciphertext
   * @param  {string} key
   * @return {string} plaintext
   */
  decrypt: (ciphertext, key) => {
    const keyMap = utils.getSubstitutionMapFromKey(key);

    return ciphertext
      .replace(/\ +/g, ' ')
      .split(' ')
      .map((s)  =>  s.split(''))
      .map((s)  =>  s.map((c) => keyMap.indexOf(c)))
      .map((na) => na.map((n) => utils.ALPHABET[n]))
      .map((na) => na.join(''))
      .join(' ');
  }

};


module.exports = Substitution;

