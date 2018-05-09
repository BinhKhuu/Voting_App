var express = require('express');
var router = express.Router();

// Require controller modules.
var login_controller = require('../controllers/login_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.redirect('http://localhost:3000/')
});

//login get request
router.get('/login', login_controller.login_get);

//login post request
router.post('/login', login_controller.login_post);

//!!!!!!!!!! testing deleted later
router.get('/login/v', function(req, res, next) {
	res.redirect('http://localhost:3000/')
})

module.exports = router;
