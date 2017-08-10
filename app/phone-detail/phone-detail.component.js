angular.
  module('phoneShop').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$stateParams', 'Phone', 'Cart', PhoneDetailController]
  });

function PhoneDetailController($stateParams, Phone, Cart) {
  var vm = this;
  vm.mainImageUrl = '';
  vm.cnt = 1;

  vm.cntMinus  = cntMinus;
  vm.cntPlus   = cntPlus;

  vm.phone = Phone.get({phoneId: $stateParams.phoneId}, function(phone) {
    vm.setImage(phone.images[0]);
  });
  vm.setImage  = setImage;
  vm.addToCart = addToCart;

  function setImage(imageUrl) {
    vm.mainImageUrl = imageUrl;
  }

  function addToCart(phoneId) {
    Cart.addToCart(phoneId, vm.cnt);
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