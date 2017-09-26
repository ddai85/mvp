bufferApp.component('bufferViewer', {
	bindings: {
		current: '<',
		currentComponents: '<',
		appUpdate: '<'
	},
	templateUrl: './templates/bufferViewer.html',
	controller: function bufferViewerController() {
		this.msds = window.msds;
		this.url = 'https://www.sciencelab.com/x'

		this.$onInit = function(){

		}

		this.update = function() {
      this.appUpdate(this.current, this.currentComponents);

		}
	}
});