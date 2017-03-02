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


  // Check if value is an integer
  const isInt = (value) =>
    !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));


  // Quit Message for the User
  const quitChoices = [new inquirer.Separator(), { name: 'Quit', value: -1 }];


  // Cipher Choices to show to the user
  const cipherChoices =
    ciphers
      .map((t,i) => ({ value: i, name: t.name }))
      .concat(quitChoices);


  // Encrypt/Decrypt choices to show to the user
  const actionChoices = [
    { name: 'Encrypt', value: 'encrypt' },
    { name: 'Decrypt', value: 'decrypt' },
  ].concat(quitChoices);


  // Check if the user wants to quit or not
  const validateAnswer = ({ input }) => {
    if (input === -1) {
      console.log('\nBye!\n');
      process.exit();
    } else {
      return input;
    }
  }


  // Get the Arguments for specified cipher
  const getArgumentsInput = (ci, action) => {
    const [start, end] =
      (action === 'encrypt') ? ['Plaintext', 'Ciphertext'] : ['Ciphertext', 'Plaintext'];

    const msg     = `Enter your ${start}:\n `;
    const cipher  = ciphers[ci];
    const prompts =
      cipher
        .args
        .map((a, i) => ({
          name:     `${i}`,
          type:     'input',
          message:  `Enter ${a.n}:`,
          validate: (inp) => {
            return true;
          }
        }));

    const parseArgument = (arg, input) => {
      if      (arg.t === 'string')  return `${input}`;
      else if (arg.t === 'integer') return parseInt(input);
    }

    inquirer
      .prompt([{ name: 'data', message: msg, type: 'input' }].concat(prompts))
      .then(ans    => [ans.data, ...(cipher.args.map((a,i) => parseArgument(a, ans[i]) ))])
      .then(args   => cipher.call[action](...args))
      .then(result => console.log(`\nYour ${end} is:\n${result}\n\n\n`))
      .then(getCipherInput);
  };


  // Ask the user what action (encrypt/decrypt) does he want to perform
  const getActionInput = (cipher) => {
    inquirer
      .prompt({
        name:    'input',
        type:    'list',
        message: 'What do you want to do?',
        choices: actionChoices
      })
      .then(validateAnswer)
      .then(action => getArgumentsInput(cipher, action));
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
      .then(getActionInput);
  }





console.log(`
Cipher Utility
-------------------------
(By Sheharyar Naseer)

`)

getCipherInput();


})();

