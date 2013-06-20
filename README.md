consulate-scrypt [![Build Status](https://travis-ci.org/consulate/consulate-scrypt.png?branch=master)](https://travis-ci.org/consulate/consulate-scrypt)
================

scrypt password hashing plugin for [consulate](https://github.com/consulate/consulate)

Usage
-----

Just register `consulate-scrypt` as a plugin with your [consulate](https://github.com/consulate/consulate) server:

```js
var consulate = require('consulate')
  , scrypt = require('consulate-script');

var app = consulate();

app.plugin(scrypt());
```

Tests
-----

```sh
$ npm test
```
