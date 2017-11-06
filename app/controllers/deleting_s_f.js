   module.exports =function (req, res) {       
       console.log('a3',req.query.id);
       const pug = require('pug');  
       var table = 'Groups';       
       const Groups = require(process.cwd()+'/'+'db').Groups;
       const Users = require(process.cwd()+'/'+'db').Users;
       Users.destroy({
            where: {
                group: req.query.id
            }
       })         
       .then(()=>{
           Groups.destroy({
               where: {
                   id: req.query.id
               }
           })        
        })                                  
        .then(()=>res.end('Groups with id '+req.query.id+' and its users are deieted'))
}
