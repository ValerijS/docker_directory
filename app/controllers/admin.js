var express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var requireTree              = require('require-tree');
var controllers              = requireTree(process.cwd()+'/'+'controllers');
var router = express.Router();
//const mustAuthenticatedMw = //require(process.cwd()+'/'+'controllers/mustAuthenticatedMw');

router.route('/admin')
  .all(controllers.mustAuthenticatedMw) 
  .get(controllers.admin_s, controllers.render('views/tiles_b.pug'))
  .post(controllers.users_of_groups, controllers.render('views/users_t.pug'));

router.get('/delete_group_f/', controllers.mustAuthenticatedMw, controllers.deleting_s_f);

router.get('/admin/put_group/:name', controllers.mustAuthenticatedMw, controllers.insert_n_s, controllers.render('views/tiles_b.pug'));

router.get('/admin/delete_user_w/:id', controllers.mustAuthenticatedMw, controllers.deleting_p);

router.get('/admin/put_user', controllers.mustAuthenticatedMw, controllers.insert_n_p, controllers.render('views/users_t.pug'));

router.post('/updata_p', urlencodedParser, controllers.update_p);

router.get('/updata_s/:value1/:value2/:id', controllers.update_s, controllers.render('views/tiles_b.pug'));

router.post('/login',controllers.login);

router.route('/register')
  .get(function (req,res){res.send(pug.renderFile('views/register.pug'))})
  .post(controllers.register)
module.exports = router;
