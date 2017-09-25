const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database.js')
const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.post('/makebuffer', (req, res) => {

  var solutionObj = {
  	name: req.body.name,
  	user: req.body.user
  }

  db.Solution.findOneAndUpdate({name: req.body.name}, solutionObj, {upsert: true, returnNewDocument: true})
    .then((solution) => {
    	var component1 = {
        name: req.body.chem1,
        amount: req.body.chem1Amt,
        bufferId: solution._id
      }
    	return db.Component.create(component1);
    })
    .then((component) => {
		  var component2 = {
		    name: req.body.chem2,
		    amount: req.body.chem2Amt,
		    bufferId: component.bufferId
		  }
			return db.Component.create(component2);
		})
		.then((component) => {
	  	console.log('SOMEHOW SUCCESSSS');
			res.status(200).send();
		})
    .catch((err) => {
    	console.log('there was an error inserting into DB', err)
    })
});

app.listen(3000, function() {
	console.log('express server up and running');
});

module.exports.app = app;