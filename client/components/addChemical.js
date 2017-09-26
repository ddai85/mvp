bufferApp.component('addChemical', {

  bindings: {
  	chemical: '<',
  	chemIndex: '<',
  	updateName: '<'
  },
  templateUrl: './templates/addChemical.html',
  controller: function () {
    this.name = '';
    this.amount = '';

	  this.valueChange = function() {
	    this.updateName(this.name, this.amount, this.chemIndex);
	  }
  }
})