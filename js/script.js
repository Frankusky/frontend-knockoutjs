// Here's my data model
var ViewModel = function() {

	this.inputSomething = ko.observable();
	this.inputResult = ko.computed(function() {
		return this.inputSomething();
	}, this);

};
ko.applyBindings(new ViewModel);