'use strict';


// Utility Methods
// ---------------

const ASCII_DIFF   = 65;
const LETTER_RANGE = 26;


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
  return cleanString(string).split('').map(charToNum);
};


/**
 * Bring a number bigger than the range, back into range
 *
 * @param  {number} num
 * @return {number}
 */
const bringInRange = (num) => {
  return num % LETTER_RANGE;
}


/**
 * Upcases a String and removes everything except alphabets
 *
 * @param  {string}
 * @return {string}
 */
const cleanString = (string) => {
  return string.toUpperCase().replace(/[^A-Z]/g, '');
}




// Export Modules
// --------------

module.exports = {
  numToChar:        numToChar,
  charToNum:        charToNum,
  numArrayToString: numArrayToString,
  stringToNumArray: stringToNumArray,
  bringInRange:     bringInRange,
  cleanString:      cleanString
};

