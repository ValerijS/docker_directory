var passport = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
const User = require(process.cwd()+'/'+'db').Administrator;
const Pasport = require(process.cwd()+"/"+"controllers/passport");
const pug = require('pug');
module.exports = function(req, res, next) {
    User.findOrCreate(
        {
        where: {email: req.body.email,  
               password:req.body.password}
        }
    ).then((result)=>{res.redirect('/admin');}) 
}
