bufferApp.component('appController', {
	templateUrl: './templates/app.html',
	controller: function appController() {
    this.buffers = [
      {name: 'tris-base'},
      {name: 'pH solution'},
      {name: 'something toxic'}
    ]
	}
});