var mongoose = require('mongoose');

	var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

	module.exports = {User};