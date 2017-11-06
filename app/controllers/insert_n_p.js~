module.exports =function (req, res, next) { 
    const pug = require('pug');
    var table = 'School';    
    const School = require(process.cwd()+'/'+'/db').Pupil;
    if (req.query.L_name && req.query.F_name && req.query.school){   
        School.findOrCreate(
             {where: {firstName: req.query.F_name,
                     lastName: req.query.L_name,
                     school: req.query.school
                     }
             }
         )          
         .then(()=>{
             School.findAll(
              {where: {
                          school: req.query.school
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
    }else{
        res.end('You must enter:"firstName/lastName/school"')
    }
}