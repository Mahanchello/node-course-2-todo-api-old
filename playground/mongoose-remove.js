const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.findByIdAndRemove('5b58a6e31947da67c659121d').then((todo) => {
	console.log(todo);
});

// Todo.findOneAndRemove({_id:'5b58a6e31947da67c659121d'}).then((todo) => {
// 	console.log(todo);
// });

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });
