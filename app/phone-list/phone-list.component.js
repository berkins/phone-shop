angular.
  module('phoneShop').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', 'Cart', PhoneListController]
  });

function PhoneListController(Phone, Cart) {
  var self = this;
  self.phones    = Phone.query();
  self.orderProp = 'price';
  self.query     = '';
  self.modal     = {};
  self.addToCart = addToCart;
  self.openModal = openModal;

  function addToCart(phoneId) {
    Cart.addToCart(phoneId);
  }

  function openModal(phone) {
    self.modal.phone = phone;
  }
}