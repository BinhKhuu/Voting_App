var async = require('async');
var Users = require('../models/users');
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

exports.login_get = function(req, res, next) {
	res.json({
		email: 'AzureDiamond@email.com',
		password: 'hunter2',
	});
}

exports.login_post = function(req, res, next){
	//validate fields

	//santize fields


	//process
	var user = new Users(
	{
		user_name: req.body.user_name,
		password: req.body.password
	});
	user.save(function (err) {
		if(err) return next(err);
		res.send({sucess: true});
	});
};