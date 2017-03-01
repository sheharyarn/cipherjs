#!/usr/bin/env node

'use strict';

(() => {

  // Import Modules
  const cipherjs = require('./index');
  const inquirer = require('inquirer');


  // Define Available Cipher Types
  const ciphers = [
    { name: "Affine Cipher",              call: cipherjs.Affine,       args: [{ n: 'Key A', t: 'integer' },
                                                                              { n: 'Key B', t: 'integer' }] },
    { name: "Caesar's Cipher",            call: cipherjs.Caesar,       args: [{ n: 'Key',   t: 'integer' }] },
    { name: "Vigenere Cipher",            call: cipherjs.Vigenere,     args: [{ n: 'Key',   t: 'string'  }] },
    { name: "Simple Substitution Cipher", call: cipherjs.Substitution, args: [{ n: 'Key',   t: 'string'  }] }
  ];




console.log(`
Cipher Utility
-------------------------
(By Sheharyar Naseer)


`)



})();

