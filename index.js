#!/usr/bin/env node

'use strict';

const utils = require('./utils');


// Main Ciphers
// ------------

const Caesar = {

  /**
   * Encrypts a Plaintext with the given numeric key
   * using Caesar's Cipher
   *
   * @param  {string} plaintext
   * @param  {number} key
   * @return {string} ciphertext
   */
  encrypt: (plaintext, key) => {
    key = utils.bringInRange(key);

    return plaintext
      .replace(/\ +/g, ' ')
      .split(' ')
      .map((s)  => utils.stringToNumArray(s))
      .map((na) => na.map((n) => utils.bringInRange(n + key)))
      .map((na) => utils.numArrayToString(na))
      .join(' ');
  },


  /**
   * Decrypts a Ciphertext with the given numeric key
   * using Caesar's Cipher
   *
   * @param  {string} ciphertext
   * @param  {number} key
   * @return {string} plaintext
   */
  decrypt: (ciphertext, key) => {
    key = utils.bringInRange(key);

    return ciphertext
      .replace(/\ +/g, ' ')
      .split(' ')
      .map((s)  => utils.stringToNumArray(s))
      .map((na) => na.map((n) => utils.bringInRange(n - key)))
      .map((na) => utils.numArrayToString(na))
      .join(' ');
  }
};



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



// Export Modules
// --------------

module.exports = {
  Affine,
  Caesar,
  Substitution
};

