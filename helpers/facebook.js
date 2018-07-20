const passport = require("passport");
const Facebookstrategy = require('passport-facebook');
const User = require("../models/User");

passport.use(new FacebookStrategy({
    clientID: "270614000372769",
    clientSecret: "bef054bf0217891735daaedd01bf2827",
    callbackURL: "http://localhost:3000/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.create({ username: profile.displayName }, function (e, user) {
      if (e) { return cb(e); }
      cb(null, user);
    });
  }
));

passport.serializeUser(function (user, cb) {
    cb(null, user)
});
passport.deserializeUser(function (user, cb) {
    cb(null, user)
});
   
module.exports = passport;