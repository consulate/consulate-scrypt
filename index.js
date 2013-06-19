/**
 * Module dependencies
 */
var scrypt = require("scrypt").verifyHash;

module.exports = function(options) {
  return function(app) {
    app.hashPassword(function(password, user, done) {
      scrypt(user.passhash, password, function(err, result) {
        if (err) return done(err);
        done(null, result);
      });
    });
  };
};