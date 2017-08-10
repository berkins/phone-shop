angular.
  module('phoneShop').
  component('phoneModal', {
    templateUrl: 'phone-modal/phone-modal.template.html',
    controller: ['Phone', 'Cart', PhoneModalController]
  });

function PhoneModalController(Phone, Cart) {
  var vm = this;
  vm.phones    = Phone.query();
  vm.modal     = {};
  vm.addToCart = addToCart;
  vm.openModal = openModal;
  vm.phone = Phone.get({phoneId: $stateParams.phoneId}, function(phone) {
    vm.setImage(phone.images[0]);
  });

  function addToCart(phoneId) {
    Cart.addToCart(phoneId);
  }

  function setImage(imageUrl) {
    vm.mainImageUrl = imageUrl;
  }

  function openModal(phone) {
    vm.modal.phone = phone;
  }
}



angular.
  module('phoneShop').
  component('phoneModal', {
    templateUrl: 'phone-modal/phone-modal.template.html',
    bindings: {
      resolve: '<',
      close: '&',
      dismiss: '&'
    },
    controller: ['Phone', 'Cart', PhoneModalController]
  });

function PhoneModalController() {
  var vm = this;

  vm.$onInit = function () {
    vm.items = vm.resolve.items;
    vm.selected = {
      item: vm.items[0]
    };
  };

  vm.ok = function () {
    vm.close({$value: $ctrl.selected.item});
  };

  vm.cancel = function () {
    vm.dismiss({$value: 'cancel'});
  };
}