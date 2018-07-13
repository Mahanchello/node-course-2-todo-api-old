const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5b464ebb92cf6965a724ff45')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b4625fdfa4c690b205ab2b8')
	}, {
		$set: {
			name: 'Anastasiya'
	}, 
		$inc: { 
			age: 1
	} 
	}, {
		returnOriginal: false	
	}).then((result) => {
		console.log(result);
	});

	//db.close();
});
