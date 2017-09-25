bufferApp.component('appController', {
	templateUrl: './templates/app.html',
	controller: function appController($http) {
    this.buffers = [
      {name: 'tris-base'},
      {name: 'pH solution'},
      {name: 'something toxic'}
    ]
	
    this.fetchBuffers = function () {
    	$http({
    		method: 'GET',
    		url: 'http://127.0.0.1:3000/buffers'
    	})
  	  .then((data) => {
        this.buffers = data.data;
        console.log(data);
  	  }, (err) => {
        console.log('there was problem with GET request', err);
  	  })
    }
    this.fetchBuffers = this.fetchBuffers.bind(this);
    this.$onInit = function () {
      this.fetchBuffers();
    }

    

	}
});