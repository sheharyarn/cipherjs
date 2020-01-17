'use strict';

const utils = require('./utils');

const Bacon = {
  /**
   * 
   * Encrypts plaintext with a Baconian Cipher
   * 
   * @param {string} plaintext
   * @returns {string} ciphertext
   */
  encrypt: (plaintext) => {
    if (!plaintext) return;
    if (typeof plaintext !== 'string') throw new TypeError('plaintext should be of Type string');
    const encrypted = [];
    const split = plaintext.replace(/[^A-Za-z\s]/g, '').split('');
    if (split.length < 1) return;
    for (let i = 0; i < split.length; i++) {
      const char = split[i].toUpperCase();
      if (utils.ALPHABET_LIST.includes(char)) {
        const index = utils.ALPHABET_LIST.indexOf(char);
        encrypted.push(utils.BACON[index]);
      } else {
        encrypted.push(char);
      }
    }
    return encrypted.join('');
  },
  
  /**
   * Decrypts ciphertext
   * 
   * @param {string} ciphertext
   * @returns {string} plaintext
   */
  decrypt: (ciphertext) => {
    if (!ciphertext) return;
    if (typeof ciphertext !== 'string') throw new TypeError('ciphertext should be of Type string');
    const decrypted = [];
    let charGroup = [];
    const split = ciphertext.replace(/[^A-B\s]/g, '').split('');
    if (split.length < 1) return;
    for (let i = 0; i < split.length; i++) {
      const char = split[i].toUpperCase();
      if (/[AB]/.test(char)) {
        if (charGroup.length === 4) {
          charGroup.push(char)
          const index = utils.BACON.indexOf(charGroup.join(''));
          decrypted.push(utils.ALPHABET_LIST[index]);
          charGroup = [];
        } else {
          charGroup.push(char);
        }
      } else {
        decrypted.push(char);
      }
    }
    if (!/[A-Z]{1,}/g.test(decrypted.join(''))) return;
    return decrypted.join('');
  }
};

module.exports = Bacon;