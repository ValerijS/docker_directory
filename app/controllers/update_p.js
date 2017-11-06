module.exports =function (req, res, next) { 
   const pug = require('pug');
   const Users = require(process.cwd()+'/'+'db').Users;  
   Users.update(
       {firstName: req.body.value,
       lastName: req.body.value,
       averageScore: req.body.value,
       school: req.body.value},
       {where: {id: req.body.id},
       fields: [req.body.name]}        
   ).then(() => res.end())
}
