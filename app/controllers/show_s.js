module.exports = function (req, res,next) {   
    const Groups = require(process.cwd()+'/'+'db').Groups;
    const pug = require('pug');
    ord = (req.query.value1) ? req.query.value1:'nameOrNumber'; 
    Groups.findAll({
        order : [ord],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
     .then((result) => {
         result1 = [];
         for (x in result) {
             result1[x] = result[x].dataValues;
         }
         variables = {
             columns: Object.keys(result[0].dataValues),
             schools: result.map(function(school) {
                 return school.dataValues;
             })     
         }
         res.variables = variables;
         next()
     })
}
