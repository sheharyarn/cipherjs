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
 * Converts an array of 0-25 numbers into a String
 *
 * @param  {array} array
 * @return {string}
 */
const numArrayToString = (array) => {
  return array.map(numToChar).join('');
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


/**
 * Converts a String into an array of 0-25 numbers
 *
 * @param  {string} string
 * @return {array}
 */
const stringToNumArray = (string) => {
  return string.split('').map(charToNum);
};



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
    numToChar:        numToChar,
    charToNum:        charToNum,
    numArrayToString: numArrayToString,
    stringToNumArray: stringToNumArray
  }
};

