bufferApp.component('appController', {
	templateUrl: './templates/app.html',
	controller: function appController($http) {
    this.buffers = [];

    this.currentBuffer;
    this.currentComponents;
	
    this.fetchBuffers = function () {
    	$http({
    		method: 'GET',
    		url: 'http://127.0.0.1:3000/buffers'
    	})
  	  .then((data) => {
        this.buffers = data.data;
  	  }, (err) => {
        console.log('there was problem with GET buffers request', err);
  	  })
    }
    this.fetchBuffers = this.fetchBuffers.bind(this);

    this.bufferClick = function(e) {
    	this.currentBuffer = e;
    	let bufferId = e._id;
    	$http.get('http://127.0.0.1:3000/buffer?' + bufferId)
    	  .then((data) => {
    	  	this.currentComponents = data.data;
    	  }, (err) => {
    	  	console.log('there was problem with GET buffer request', err);
    	  })
    }
    this.bufferClick = this.bufferClick.bind(this);
  

    this.$onInit = function () {
      this.fetchBuffers();
    }

    this.appUpdate = function(buffer, components) {
      this.updateObj = {
        name: buffer.name,
        user: buffer.user,
        description: buffer.description,
        components: components
      }

    }
    this.appUpdate = this.appUpdate.bind(this);
  }
});