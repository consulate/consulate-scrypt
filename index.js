/**
 * Module dependencies
 */
var scrypt = require("scrypt").verifyHash;

module.exports = function(options) {
  return function(app) {
    app.verifyPassword(function(user, password, done) {
      scrypt(user.passhash, password, function(err, result) {
        if (err) return done(err);
        done(null, result);
      });
    });
  };
};