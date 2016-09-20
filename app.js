(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.controller('ToBuyShoppingController', ToBuyShoppingController)
.service('ShoppingListService', ShoppingListService);

AlreadyBoughtShoppingController.$inject = ['ShoppingListService'];
function AlreadyBoughtShoppingController(ShoppingListService) {  
	var showList = this;
	//showList.items = ShoppingListService.getItems();
	showList.itemsOut = ShoppingListService.getItemsOut();
}

ToBuyShoppingController.$inject = ['ShoppingListService'];
function ToBuyShoppingController(ShoppingListService) {
  var showList = this;
  showList.items = ShoppingListService.getItems();
  showList.removeItem = function (itemIndex) {
  ShoppingListService.removeItem(itemIndex);
  };
}

function ShoppingListService() {
  var service = this;

  var items = [ { name: "Producto 1", quantity: 5 },{ name: "Producto 2", quantity: 6},{ name: "Producto 3", quantity: 7 },{ name: "Producto 4", quantity: 8 },{ name: "Producto 5", quantity: 9 } ];
  var itemsOut = [];

  service.addItem = function (itemName, quantity) {
    var itemOut = {
      name: itemName,
      quantity: quantity
    };
    itemsOut.push(itemOut);
  };

  service.removeItem = function (itemIdex) {
	service.addItem(items[itemIdex].name,items[itemIdex].quantity);
	items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getItemsOut = function () {
    return itemsOut;
  };




}
})();