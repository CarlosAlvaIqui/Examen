var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user', { title: 'Express' });
});

exports.index = function(req, res){
	res.render('index', {title: 'Hola Mundo', otroTexto: 'otro texto'})
};


exports.users = function(req, res){
	res.render('user', {title: 'Usuarios', otroTexto: 'otro texto'})
};

module.exports = router;
