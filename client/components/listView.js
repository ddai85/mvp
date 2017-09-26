bufferApp.component('listView', {
	bindings: {
		bufferClick: '<',
		buffers: '<'
	},
	templateUrl: './templates/listView.html',
	controller: function listViewController() {
    var context = this;
		this.$onInit = () => {

		}
	}
});