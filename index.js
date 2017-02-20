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
  }
};


// Export Modules
// --------------

module.exports = {
  Caesar,
  Substitution
};

