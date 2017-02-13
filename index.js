#!/usr/bin/env node

'use strict';


// Utility Methods
// ---------------

const ASCII_DIFF = 65;

/**
 * Converts a number in the 0-25 range into
 * an A-Z character
 *
 * @param  {number} num
 * @return {string}
 */
const numToChar = (num) => {
  return String.fromCharCode(num + ASCII_DIFF);
};


/**
 * Converts an A-Z character to an integer
 * in the 0-25 range
 *
 * @param  {string} char - One Letter String
 * @return {number}
 */
const charToNum = (char) => {
  return char.toUpperCase().charCodeAt(0) - ASCII_DIFF;
}



// Main Ciphers
// ------------

const Caesar = {
  encrypt: (plaintext, key) => {
  },

  decrypt: (ciphertext, key) => {
  }
};



// Export Modules
// --------------

module.exports = {
  Substitution: Caesar,
  utils: {
    numToChar: numToChar,
    charToNum: charToNum
  }
};

