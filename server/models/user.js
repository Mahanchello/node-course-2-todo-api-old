var mongoose = require('mongoose');

	var Users = mongoose.model('Users', {
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

	module.exports = {Users};