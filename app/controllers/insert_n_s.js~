module.exports =function (req, res, next) { 
   const pug = require('pug');
   var table = 'School';    
   const School = require(process.cwd()+'/'+'/db').School;
      if (req.params.name){   
          School.findOrCreate(
              {where: {nameOrNumber: req.params.name,
                      numberOfPupils: req.params.number,
                      averageScore: req.params.score
                      }
              }
          )          
          .then(()=>{
               School.findAll({
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