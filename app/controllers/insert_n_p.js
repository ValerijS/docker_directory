module.exports =function (req, res, next) { 
    const pug = require('pug');
    var table = 'Groups';    
    const Groups = require(process.cwd()+'/'+'db').Users;
    if (req.query.L_name && req.query.F_name && req.query.group){   
        Groups.findOrCreate(
             {where: {firstName: req.query.F_name,
                     lastName: req.query.L_name,
                     group: req.query.group
                     }
             }
         )          
         .then(()=>{
             Groups.findAll(
              {where: {
                          group: req.query.group
                      }
              })
              .then((result) => {
                  variables = {
                      columns: Object.keys(result[0].dataValues),
                      schools: result.map(function(group) {
                          return group.dataValues;
                      })
                  }
                  res.variables = variables;
                  next()
              })   
        })
    }else{
        res.end('You must enter:"firstName/lastName/group"')
    }
}
