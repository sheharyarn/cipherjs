#!/usr/bin/env node

'use strict';

(() => {

  // Import Modules
  const cipherjs = require('../src/index');
  const inquirer = require('inquirer');
  const chalk    = require('chalk');
  const print    = console.log;
  const bold     = chalk.bold;
  const accent   = chalk.yellow;


  // Define Available Cipher Types
  const ciphers = [
    { name: "Affine Cipher",              call: cipherjs.Affine,       args: [{ n: 'Key A', t: 'integer' },
                                                                              { n: 'Key B', t: 'integer' }] },
    { name: "Caesar's Cipher",            call: cipherjs.Caesar,       args: [{ n: 'Key',   t: 'integer' }] },
    { name: "Vigenere Cipher",            call: cipherjs.Vigenere,     args: [{ n: 'Key',   t: 'string'  }] },
    { name: "Simple Substitution Cipher", call: cipherjs.Substitution, args: [{ n: 'Key',   t: 'string'  }] }
  ];


  // Capitalize First Letter
  String.prototype.capitalize = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
  }

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
      print('\nBye!\n');
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
          message:  `Enter ${a.n} (${a.t.capitalize()}):`,
          validate: (inp) => (inp === `${parseArgument(a, inp)}`)
        }));

    const parseArgument = (arg, input) => {
      if      (arg.t === 'string')  return `${input}`;
      else if (arg.t === 'integer') return parseInt(input);
    }

    inquirer
      .prompt([{ name: 'data', message: msg, type: 'input' }].concat(prompts))
      .then(ans    => [ans.data, ...(cipher.args.map((a,i) => parseArgument(a, ans[i]) ))])
      .then(args   => cipher.call[action](...args))
      .then(result => print(`\nYour ${end} is:\n  ${accent(result)}\n\n`))
      .then(getCipherInput)
      .catch(err => {
        print(`  Invalid Argument: ${err}. Try Again.`);
        getArgumentsInput(ci, action);
      });
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




  print();
  print(bold('CipherJS - CLI'));
  print(bold('---------------'));
  print(chalk.dim(chalk.underline('Note') + ': Numbers & Special Characters are automatically removed'));
  print();
  print();

  getCipherInput();


})();

