
//---
var connect = require('connect');

var app = connect()
	.use(connect.static('public'))
	.use(function (req, res) {
		res.end("Couldn't find it.");
	})
	.listen(3000, function () {
  		console.log("Server ready at http://localhost:3000");
	});


