(function (req,res,next) {
  //'use strict'; 

  var passport       = require('passport');
  var LocalStrategy  = require('passport-local').Strategy;
 const User = require(process.cwd()+'/'+'db').Administrator;
  
  module.exports = function() {
      passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, function(username, password,done){
      User.findOne({
          where:{ username : username}
      })
     .then((user,err)=>{
        return err 
          ? done(err)
          : user
            ? password === user.password
              ? done(null, user)
              : done(null, false, { message: 'Incorrect password.' })
            : done(null, false, { message: 'Incorrect username.' });
      })
    } ));

    passport.serializeUser(function(user, done) {
      done(null, user.id);
    });
    passport.deserializeUser(function(id, done) {
      User.findById(id, function(err,user){
        err
          ? done(err)
          : done(null,user);
      });
    });

  };

})();
