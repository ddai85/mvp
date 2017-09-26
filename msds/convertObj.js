var fs = require('file-system');

fs.readFile('msds.js', (err, data) => {
	var body = data.toString();
	
	var msdsObj = JSON.parse(body);
	window.msds = msdsObj
})