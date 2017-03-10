#!/usr/bin/env node

'use strict';


// Require Ciphers
// ---------------

const Affine       = require('./lib/affine');
const Caesar       = require('./lib/caesar');
const Substitution = require('./lib/substitution');
const Vigenere     = require('./lib/vigenere');



// Export Modules
// --------------

module.exports = {
  Affine,
  Caesar,
  Substitution,
  Vigenere
};

