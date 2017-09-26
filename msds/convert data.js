var fs = require('file-system');

fs.readFile('./msds_dataset.txt', (err, data) => {

	var body = data.toString();
	var bodyArr = body.split('\n')

  var linkArr = [];
	for (var i in bodyArr) {
		linkArr.push(bodyArr[i].split('/x')[1])
	}

  var nameArr = [];
	for (var i in linkArr) {
		nameArr.push(linkArr[i].split('">')[1])
		linkArr[i] = linkArr[i].split('">')[0]
	}
	//console.log(linkArr);

	for (var i in nameArr) {
		nameArr[i] = nameArr[i].split(' MSDS')[0]
	}
	//console.log(nameArr);

  var msdsObj = {};

  for (var i in nameArr) {
  	msdsObj[nameArr[i]] = linkArr[i]
  }
  //console.log(msdsObj)

  fs.writeFile ('msds.js', JSON.stringify(msdsObj), () => {
  	console.log('file write success')
  })
})