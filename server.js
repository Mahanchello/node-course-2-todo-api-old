var mongoose = require ('mongoose');

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost:27017/TodoApp', {
	useNewUrlParser: true
});

var Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});


var otherTodo = new Todo({
	text: 'Attend speaking class', 
	completed: true, 
	completedAt: 5
});

otherTodo.save().then((doc) => {
	console.log(JSON.stringife(doc, undefined, 2));
}, (e) => {
	console.log('Unable to save todo', e);
});