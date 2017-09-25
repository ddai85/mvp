const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('client'));
app.use(bodyParser.json());

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.post('/makebuffer', (req, res) => {
  console.log(req.body);
  res.status(200).send();
});

app.listen(3000, function() {
	console.log('express server up and running');
});

module.exports.app = app;