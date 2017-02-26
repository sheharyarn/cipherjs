'use strict';


// Utility Methods
// ---------------

const ASCII_DIFF      = 65;
const ALPHABET        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHABET_LIST   = ALPHABET.split('');
const ALPHABET_RANGE  = ALPHABET.length;

class NotAnIntegerError        extends TypeError {}
class NotAPositiveIntegerError extends NotAnIntegerError {}


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
 * Does a Postive Mod (result is always a positive integer)
 *
 * @param  {number} num
 * @return {number}
 */
const positiveMod = (num, div) => {
  return ((num % div) + div) % div;
}


/**
 * Bring a number bigger than the range, back into range
 *
 * @param  {number} num
 * @return {number}
 */
const bringInRange = (num) => {
  return positiveMod(num, ALPHABET_RANGE);
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


/**
 * Normalizes a user-given key in to a full key for
 * substitution cipher by removing repeating characters
 * and containing mappings for all alphabets
 *
 * @param  {string}
 * @return {string}
 */
const getSubstitutionMapFromKey = (key) => {
  const userKey   = [... new Set( cleanString(key).split('') )];
  const remaining = ALPHABET_LIST.filter((c) => userKey.indexOf(c) == -1);

  return userKey.concat(remaining).join('');
}


/**
 * Checks if all passed arguments are Integers,
 * and throws a TypeError if not
 *
 * @param  {any}
 * @return {boolean}
 */
const validateIntegers = (t, ...terms) => {
  const isInteger = (term) => {
    if (typeof term === 'number' && (term % 1) === 0)
      return true;
    else
      throw new NotAnIntegerError(`"${term}" is not a valid Integer`);
  }

  return terms.concat(t).map(isInteger) && true;
}


/**
 * Calculates GCD of two integers using Euclidean Algorithm.
 *
 * @param  {number}
 * @param  {number}
 * @return {number}
 */
const gcd = (a, b) => {
  validateIntegers(a, b);

  if (a <= 0 || b < 0)
    throw new NotAPositiveIntegerError('Only Positive Integers can be used for GCD');

  if (b === 0)
    return a;
  else
    return gcd(b, a % b);
}


/**
 * Calculates GCD along with the Multiplicative Inverse of two
 * integers using Extended Euclidean Algorithm
 *
 * @param  {number}
 * @param  {number}
 * @return {number}
 */
const xgcd = (a, b) => {
  if (b === 0) {
    return [1, 0, a];

  } else {
    let x, y, d;
    [x, y, d] = xgcd(b, a % b);

    return [y, x - y * Math.floor(a/b), d];
  }
}


/**
 * Finds multiplicative inverse of "a" w.r.t. "b" using
 * Extended Euclidean Algorithm
 *
 * @param  {number} a
 * @param  {number} b
 * @return {number}
 */
const multiplicativeInverse = (a, b) => {
  validateIntegers(a, b);

  if (a <= 0 || b < 0)
    throw new NotAPositiveIntegerError('Only Positive Integers can be used for GCD');

  return positiveMod(xgcd(a, b)[0], b);
}


/**
 * Checks if two numbers are co-prime
 *
 * @param  {number}
 * @param  {number}
 * @return {boolean}
 */
const areCoprime = (a, b) => {
  return gcd(a, b) === 1;
}



// Export Modules
// --------------

module.exports = {
  ALPHABET,
  ALPHABET_LIST,

  NotAnIntegerError,
  NotAPositiveIntegerError,

  numToChar,
  charToNum,
  numArrayToString,
  stringToNumArray,
  bringInRange,
  getSubstitutionMapFromKey,

  gcd,
  multiplicativeInverse,
  areCoprime,
  validateIntegers,
  cleanString
};

