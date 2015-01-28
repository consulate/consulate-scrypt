/**
 * Module dependencies
 */
var scrypt = require('scrypt').verifyHash;

module.exports = function(options) {
  return function(app) {
    app.verifyPassword(function(user, password, done) {
      scrypt(user.passhash, password, function(err, result) {
        if (err && err.scrypt_err_code === 11) return done(null, false);
        if (err && err.scrypt_err_message === 'data is not a valid scrypt-encrypted block') return done('pass');
        done(err, result);
      });
    });
  };
};
