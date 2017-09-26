const mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/buffer');


var bufferSchema = mongoose.Schema({
	name: String,
	user: String,
	description: String
})

var Solution = mongoose.model('Solution', bufferSchema);

var componentSchema = mongoose.Schema({
  name: String,
  amount: String,
  unit: String,
	bufferId: String
})

var Component = mongoose.model('Component', componentSchema);


module.exports = {
	Solution: Solution,
  Component: Component
};