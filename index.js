/**
 * Module dependencies
 */
var scrypt = require("scrypt").verifyHash;

module.exports = function(options) {
  return function(app) {
    app.verifyPassword(function(user, password, done) {
      scrypt(user.passhash, password, function(err, result) {
        // scrypt returns an error+boolean if it's invalid;
        // consulate will treat an error as fatal and render
        // an error page so we need to check for the
        // 'password is incorrect' message and send only a boolean
        if (err && err.message === 'password is incorrect') return done(null, false);
        done(err, result);
      });
    });
  };
};