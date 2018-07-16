const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const{Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');


User.findById('5b47ae1f92cf3f1cd1a99142').then((user) => {
	if (!user) {
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});

// User.findById('5b47ae1f92cf3f1cd1a99142').then((user) => {
// 	if (!user) {
// 		return console.log('User not found');
// 	}
// 	console.log(JSON.stringify(user, undefined, 2));
// }, (e) => {
// 	console.log(e);
// });

// var id = '5b48e13d28174b6a36986d0711'; 

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id 
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });


