angular.
  module('phoneShop').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$stateParams', 'Phone', 'Cart', PhoneDetailController]
  });

function PhoneDetailController($stateParams, Phone, Cart) {
  var self = this;
  self.mainImageUrl = '';
  self.phone = Phone.get({phoneId: $stateParams.phoneId}, function(phone) {
    self.setImage(phone.images[0]);
  });
  self.setImage  = setImage;
  self.addToCart = addToCart;

  function setImage(imageUrl) {
    self.mainImageUrl = imageUrl;
  }

  function addToCart(phoneId) {
    Cart.addToCart(phoneId);
  }
}