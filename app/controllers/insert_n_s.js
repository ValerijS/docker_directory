module.exports =function (req, res, next) { 
   const pug = require('pug');
   var table = 'Groups';    
   const Groups = require(process.cwd()+'/'+'db').Groups;
      if (req.params.name){   
          Groups.findOrCreate(
              {where: {nameOrNumber: req.params.name,
                      numberOfUsers: req.params.number,
                      averageScore: req.params.score
                      }
              }
          )          
          .then(()=>{
               Groups.findAll({
                   attributes: {
                       exclude: ['createdAt', 'updatedAt']
                    }
               })
                 .then((result) => {
                     variables = {
                         columns: Object.keys(result[0].dataValues),
                         schools: result.map(function(school) {
                             return school.dataValues;
                         })
                     }
                     res.variables = variables;
                     next()
                 })   
          })
      }
}
