module.exports = function(odata) {
	
	let userModel = {
		name: String,
		meta: {
			age: Number
		},
	  	created_at: Date,
  		updated_at: Date
	};
	odata.resource('users', userModel);


	let bookModel = {
	  title: String,
	  price: Number
	};	
	odata.resource('books', bookModel);
}