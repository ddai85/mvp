bufferApp.component('addChemical', {

  bindings: {
  	chemIndex: '<',
  	updateName: '<'
  },
  templateUrl: './templates/addChemical.html',
  controller: function () {
  	this.index;
    this.name = '';
    this.amount = '';

	  this.valueChange = function() {
	    this.updateName(this.name, this.amount, this.index);
	  }

    this.$onInit = function() {
      this.index = this.chemIndex;

      $( function() {
        $( "input.chemical" ).autocomplete({
          source: msdsArr,
          delay: 0,
          minLength: 3
        });
      });
    }
  }
})