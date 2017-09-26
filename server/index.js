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
  	name: req.body[0].name,
  	user: req.body[0].user,
    description: req.body[0].description
  }
  var solutionId;
  db.Solution.findOneAndUpdate({name: req.body[0].name}, solutionObj, {upsert: true, new: true})
    .then((solution) => {
      solutionId = solution._id;
      return db.Component.find({bufferId: solution._id}).remove();

    })
    .then(() => {
      var componentsArr = req.body[1];
      console.log('this is solution id', solutionId)
      componentsArr.forEach((component) => {
        component.bufferId = solutionId;
      })
      console.log(componentsArr);
    	return db.Component.create(componentsArr);
    })
		.then((component) => {
	  	console.log('SOMEHOW SUCCESSSS');
			res.status(200).send();
		})
    .catch((err) => {
    	console.log('there was an error inserting into DB', err);
    })
});


app.get('/buffers', (req, res) => {
  db.Solution.find()
    .then((buffers) => {
    	res.status(200).send(buffers);
    })
    .catch((err) => {
    	console.log('there was error GET a buffer', err);
    })
});


app.get('/buffer', (req, res) => {
  let bufferId = req.url.split('?')[1];
  db.Component.find({bufferId: bufferId})
    .then((components) => {
      res.status(200).send(components);
    })
    .catch((err) => {
      console.log('there was error GET components', err);
    })
});


app.listen(3000, function() {
	console.log('express server up and running');
});

module.exports.app = app;