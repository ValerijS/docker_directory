   module.exports =function (req, res) {       
       console.log(req.params.id);
       const pug = require('pug');  
       var table = 'Groups';       
       const Groups = require(process.cwd()+'/'+'db').Groups;
       const Users = require(process.cwd()+'/'+'db').Users;
       Users.destroy({
           where: {
               id: req.params.id
           }
       })                                    
       .then(()=>res.end('Users with id '+req.params.id+' is deleted'))
   }
