angular.
  module('phoneShop').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', 'Cart', PhoneListController]
  });

function PhoneListController(Phone, Cart) {
  var vm = this;
  vm.phones    = Phone.query();
  vm.orderProp = 'price';
  vm.query     = '';
  vm.modal     = {};
  vm.cnt       = 1;

  vm.addToCart = addToCart;
  vm.openModal = openModal;
  vm.cntMinus  = cntMinus;
  vm.cntPlus   = cntPlus;

  function addToCart(phoneId) {
    Cart.addToCart(phoneId, vm.cnt);
  }

  function openModal(phone) {
    vm.cnt = 1;
    vm.modal.phone = phone;
  }

  function cntMinus() {
    vm.cnt--;
    if (vm.cnt < 1) {
      vm.cnt = 1;
    }
  }

  function cntPlus() {
    vm.cnt++;
  }
}