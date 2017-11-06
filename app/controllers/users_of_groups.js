
module.exports = function (req, res, next) {    
    const pug = require('pug');
    var table = 'Users';    
    const Users = require(process.cwd()+'/'+'/db').Users;
    Users.findAll({
           where: {
            group: req.body.name
           },
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
     })
       .then((result) => {
         if(result.length != 0){
             var variables = {
                  columns: Object.keys(result[0].dataValues),
                  schools: result.map(function(school) {
                      return school.dataValues;
                  })
             }
             res.variables = variables;
             next()
          }else{
           res.end('There are not users in the list of this group')
          }
       })
}
