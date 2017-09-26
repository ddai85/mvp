bufferApp.component('bufferCreator', {
	bindings: {
		fetch: '<',
    update: '<'
	},
	templateUrl: './templates/bufferCreator.html',
	controller: function bufferCreatorController($http) {

		this.makeBuffer = {
      name: null,
      user: null,
      description: null
		}
    this.chemicals = [];
    this.chemIndex = 0;

    this.$onChanges = function(change) {
      if (change.update.currentValue){
        this.makeBuffer.name = change.update.currentValue.name;
        this.makeBuffer.user = change.update.currentValue.user;
        this.makeBuffer.description = change.update.currentValue.description;
        for (var i in change.update.currentValue.components) {
          this.chemIndex++;
          this.chemicals.push(change.update.currentValue.components[i])
        };
      }
    }



    this.bufferData = [this.makeBuffer, this.chemicals];

    //needs a function to listen for click
    this.onClick = function() {
      if (this.makeBuffer.name === null || this.makeBuffer.user === null) {
        console.log('cannot leave buffer name and user empty');
        return;
      }

      $http({
      	method: 'POST',
      	url: 'http://127.0.0.1:3000/makebuffer',
      	data: this.bufferData
      })
      .then((success)=>{
      	console.log('post succeeded', success)
      	this.fetch();
        this.onReset();
      }, (error) => {
      	console.log('post failed', error)
      })
    //upon click a post request to /buffer is sent to server
    }

    this.addRow = function() {
      let chemObj = {
        name: null,
        amount: null
      }
      this.chemicals.push(chemObj);
      this.chemIndex++;
    }

    this.onReset = function() {
      this.makeBuffer = {
        name: null,
        user: null,
      };
      this.chemicals = [];
      this.chemIndex = 0;
      this.bufferData = [this.makeBuffer, this.chemicals];
    }

    this.updateName = function(name, amount, index) {
      this.chemicals[index - 1].name = name;
      this.chemicals[index - 1].amount = amount;
    };
    this.updateName = this.updateName.bind(this);

	}
});