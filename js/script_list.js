var BetterListModel = function () {
	groceryList = ["Eggs", "Meat", "Apple"];
	this.itemToAdd = ko.observable("");
	this.allItems = ko.observableArray(groceryList); // Initial items
	this.selectedItems = ko.observableArray();// Initial selection

	this.addItem = function () { // Clear the text box
		if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0)) // Prevent blanks and duplicates
			this.allItems.push(this.itemToAdd());
			this.itemToAdd("");
			$(".inputBox").value('');
};

	this.removeSelected = function () {// Clear selection
		this.allItems.removeAll(this.selectedItems());
		this.selectedItems([]); 
	};

	this.sortItems = function() {
		this.allItems.sort(function (a, b) { // Function that makes insensitive sorting
			return a.toLowerCase().localeCompare(b.toLowerCase());
		});
	};
};

ko.applyBindings(new BetterListModel());