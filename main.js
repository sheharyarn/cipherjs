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


  // Quit Message for the User
  const quitChoices = [new inquirer.Separator(), { name: 'Quit', value: -1 }];


  // Cipher Choices to show to the user
  const cipherChoices =
    ciphers
      .map((t,i) => ({ value: i, name: t.name }))
      .concat(quitChoices);



  // Check if the user wants to quit or not
  const validateAnswer = ({ input }) => {
    if (input === -1) {
      console.log('\nBye!\n');
      process.exit();
    } else {
      return input;
    }
  }


  // Ask the User which Cipher he wants to use
  const getCipherInput = () => {
    inquirer
      .prompt({
        name:    'input',
        type:    'list',
        message: 'Choose an Option',
        choices: cipherChoices
      })
      .then(validateAnswer)
      .then(() => {});
  }





console.log(`
Cipher Utility
-------------------------
(By Sheharyar Naseer)


`)

getCipherInput();


})();

