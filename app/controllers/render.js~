module.exports = function(template) {   
    const pug = require('pug');
    return function (req, res) {
        res.send( pug.renderFile(template, res.variables));
    };
}