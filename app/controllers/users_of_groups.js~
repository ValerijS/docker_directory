
module.exports = function (req, res, next) {    
    const pug = require('pug');
    var table = 'Pupil';    
    const Pupil = require(process.cwd()+'/'+'/db').Pupil;
    Pupil.findAll({
           where: {
            school: req.body.name
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
           res.end('There are not pupils in the list of this school')
          }
       })
}