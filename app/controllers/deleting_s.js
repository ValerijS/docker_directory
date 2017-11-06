   module.exports =function (req, res) {       
       console.log(req.params.id);
       const pug = require('pug');  
       var table = 'Groups';       
       const Groups = require(process.cwd()+'/'+'db').Groups;
       const Users = require(process.cwd()+'/'+'db').Users;
       Users.destroy({
            where: {
                school: req.params.id
            }
       })         
       .then(()=>{
           Groups.destroy({
               where: {
                   id: req.params.id
               }
           })        
        })                                  
        .then(()=>res.end('Groups with id '+req.params.id+' and its users are deieted'))
}
