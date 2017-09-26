bufferApp.component('bufferCreator', {
	bindings: {
		fetch: '<'
	},
	templateUrl: './templates/bufferCreator.html',
	controller: function bufferCreatorController($http) {

		this.makeBuffer = {
      name: null,
      user: null,
      chem1: null,
      chem1Amt: null,
      chem2: null,
      chem2Amt: null
		}

    //needs a function to listen for click
    this.onClick = function() {

      $http({
      	method: 'POST',
      	url: 'http://127.0.0.1:3000/makebuffer',
      	data: this.makeBuffer
      })
      .then((success)=>{
      	console.log('post succeeded', success)
      	this.fetch();
      	this.makeBuffer = {
      		name: null,
		      user: null,
		      chem1: null,
		      chem1Amt: null,
		      chem2: null,
		      chem2Amt: null
      	};
      }, (error) => {
      	console.log('post failed', error)
      })
    //upon click a post request to /buffer is sent to server
    }

	}
});