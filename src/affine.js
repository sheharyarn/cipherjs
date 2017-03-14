'use strict';

const utils = require('./utils');


const Affine = {
  /**
   * Encrypts a Plaintext with the given numeric A, B key
   * pair using Affine Cipher
   *
   * @param  {string} plaintext
   * @param  {number} key A
   * @param  {number} key B
   * @return {string} ciphertext
   */
  encrypt: (plaintext, keyA, keyB) => {
    utils.validateIntegers(keyA, keyB);

    if (!utils.areCoprime(keyA, 26))
      throw new RangeError(`"${keyA}" is not Co-Prime with 26`);

    if (keyB < 0 || keyB > 25)
      throw new RangeError(`"${keyB}" is not between 0-25`);


    return plaintext
      .replace(/\ +/g, ' ')
      .split(' ')
      .map((s)  => utils.stringToNumArray(s))
      .map((na) => na.map((n) => (n * keyA) + keyB))
      .map((na) => na.map((n) => utils.bringInRange(n)))
      .map((na) => utils.numArrayToString(na))
      .join(' ');
  },


  /**
   * Decrypts a Ciphertext with the given numeric A, B key
   * pair using Affine Cipher
   *
   * @param  {string} ciphertext
   * @param  {number} key A
   * @param  {number} key B
   * @return {string} plaintext
   */
  decrypt: (ciphertext, keyA, keyB) => {
    utils.validateIntegers(keyA, keyB);

    if (!utils.areCoprime(keyA, 26))
      throw new RangeError(`"${keyA}" is not Co-Prime with 26`);

    if (keyB < 0 || keyB > 25)
      throw new RangeError(`"${keyB}" is not between 0-25`);

    const modInverse = utils.multiplicativeInverse(keyA, 26);

    return ciphertext
      .replace(/\ +/g, ' ')
      .split(' ')
      .map((s)  => utils.stringToNumArray(s))
      .map((na) => na.map((n) => (n - keyB) * modInverse))
      .map((na) => na.map((n) => utils.bringInRange(n)))
      .map((na) => utils.numArrayToString(na))
      .join(' ');
  }
};


module.exports = Affine;

