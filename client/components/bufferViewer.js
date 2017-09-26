bufferApp.component('bufferViewer', {
	bindings: {
		current: '<',
		currentComponents: '<'
	},
	templateUrl: './templates/bufferViewer.html',
	controller: function bufferViewerController() {
		this.msds = window.msds;
		this.url = 'https://www.sciencelab.com/x'
	}
});