var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema(
	{
		user_name: {type: String, required: true, max: 20},
		password: {type: String, required: true, max: 100},

	}
);

module.exports = mongoose.model('Users', UsersSchema);