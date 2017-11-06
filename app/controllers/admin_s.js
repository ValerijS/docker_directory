  module.exports = function (req, res,next) {     
      var email = req.body.email;
      const pug = require('pug');
      const Groups = require(process.cwd()+'/'+'db').Groups;
      Groups.findAll({
          attributes: {
              exclude: ['createdAt', 'updatedAt']
          }
      })
      .then((result) => {
          result1 = [];
          for (x in result) {
              result1[x] = result[x].dataValues;
          }
          var variables = {
              columns:result[0].dataValues,
              schools: result1,
              sess_em1: req.session.passport.user
          };       
          res.variables = variables;
          next() 
      })   
  }
