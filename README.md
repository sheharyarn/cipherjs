[<img src='media/logo.png' width='400px' />][github-repo]
=========================================================

[![Build Status][shield-travis]][travis]
[![Coverage Status][shield-coveralls]][coveralls]
[![Downloads][shield-downloads]][npm]
[![Version][shield-version]][npm]


> Javascript implementation of simple Ciphers

<br/>




## Installation

Install the package using `yarn`:

```bash
$ yarn add cipherjs
```

or `npm`:

```bash
$ npm install --save cipherjs
```

<br/>




## Usage

Start by `require`-ing the module:

```js
const CipherJS = require('cipherjs');
```

It returns an `Object` of available ciphers, each with their own `encrypt` and `decrypt` methods:

```js
const Vigenere = CipherJS.Vigenere;

Vigenere.encrypt('MY SECRET MESSAGE', 'MY SECRET KEY')
// YW KIEIIM WIQEYYI
```

<br/>




## Command-line App

`cipherjs` comes with a CLI app that lets you encrypt or decrypt data interactively. To use it,
install the package globally:

```bash
$ npm install -g cipherjs
```

and just execute `cipherjs` in your terminal:

```bash
$ cipherjs
```

<br/>




## Contributing

 - [Fork][github-fork], Enhance, Send PR
 - Lock issues with any bugs or feature requests
 - Implement something from Roadmap
 - Spread the word

<br/>




## License

This package is available as open source under the terms of the [MIT License][github-license].

<br/>




  [logo]:             media/logo.png
  [npm]:              https://www.npmjs.com/package/cipherjs
  [travis]:           https://travis-ci.org/sheharyarn/cipherjs
  [coveralls]:        https://coveralls.io/github/sheharyarn/cipherjs

  [github-repo]:      https://github.com/sheharyarn/cipherjs
  [github-fork]:      https://github.com/sheharyarn/cipherjs/fork
  [github-license]:   https://github.com/sheharyarn/cipherjs/blob/master/LICENSE

  [shield-travis]:    https://img.shields.io/travis/sheharyarn/cipherjs.svg
  [shield-coveralls]: https://img.shields.io/coveralls/sheharyarn/cipherjs.svg
  [shield-downloads]: https://img.shields.io/npm/dt/cipherjs.svg
  [shield-version]:   https://img.shields.io/npm/v/cipherjs.svg


