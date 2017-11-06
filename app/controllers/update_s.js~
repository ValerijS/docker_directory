   module.exports = function (req, res, next){       
       const pug = require('pug');
       const School = require(process.cwd()+'/'+'/db').School;
       School.update({nameOrNumber: req.params.value2,
                      numberOfPupils: req.params.value2,
                      averageScore: req.params.value2},                   
                     {
                          where: {
                              id: req.params.id
                          },
                          fields: [req.params.value1]
                     }        
       ).then(()=>{
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