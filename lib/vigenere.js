'use strict';

const utils = require('./utils');


const Vigenere = {
  /**
   * Encrypts a Plaintext with the given string key
   * using Vigenere Cipher
   *
   * @param  {string} plaintext
   * @param  {string} key
   * @return {string} ciphertext
   */
  encrypt: (plaintext, key) => {
    const keyIndices = utils.stringToNumArray(key);
    const length     = keyIndices.length;
    let   counter    = 0;

    return plaintext
      .replace(/\ +/g, ' ')
      .split(' ')
      .map((s)  => utils.stringToNumArray(s))
      .map((na) => na.map((n) => n + keyIndices[counter++ % length]))
      .map((na) => na.map((n) => utils.bringInRange(n)))
      .map((na) => utils.numArrayToString(na))
      .join(' ');
  },


  /**
   * Decrypts a Ciphertext with the given string key
   * using Vigenere Cipher
   *
   * @param  {string} ciphertext
   * @param  {string} key
   * @return {string} plaintext
   */
  decrypt: (plaintext, key) => {
    const keyIndices = utils.stringToNumArray(key);
    const length     = keyIndices.length;
    let   counter    = 0;

    return plaintext
      .replace(/\ +/g, ' ')
      .split(' ')
      .map((s)  => utils.stringToNumArray(s))
      .map((na) => na.map((n) => n - keyIndices[counter++ % length]))
      .map((na) => na.map((n) => utils.bringInRange(n)))
      .map((na) => utils.numArrayToString(na))
      .join(' ');
  }
};


module.exports = Vigenere;

