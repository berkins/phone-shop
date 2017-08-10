angular.
  module('phoneShop').
  component('cartShort', {
    templateUrl: 'cart-short/cart-short.template.html',
    controller: ['$scope', 'Phone', 'Cart', CartShortController]
  });

function CartShortController($scope, Phone, Cart) {
  var vm = this;
  vm.short = {cnt: 0, sum: 0};

  $scope.$watch(
    getCurrentCart,
    setShortCart,
    true
  );

  var currentCart = Cart.currentCart();
  var phones = Phone.query({}, function(result) {
    phones = result;
    var phonesObj = phones.reduce(function(obj, cur) {
      obj[cur.id] = {
        name: cur.name,
        price: cur.price,
        imageUrl: cur.imageUrl
      };
      return obj;
    }, {});
    for (phone in currentCart) {
      vm.short.cnt += currentCart[phone];
      vm.short.sum += currentCart[phone] * phonesObj[phone].price;
    }
  });

  function getCurrentCart() { return Cart.currentCart(); }
  function setShortCart(current, prev) {
    var phones = Phone.query({}, function(result) {
      phones = result;
      var phonesObj = phones.reduce(function(obj, cur) {
        obj[cur.id] = {
          name: cur.name,
          price: cur.price,
          imageUrl: cur.imageUrl
        };
        return obj;
      }, {});
      vm.short = {cnt: 0, sum: 0};
      for (phone in current) {
        vm.short.cnt += current[phone];
        vm.short.sum += current[phone] * phonesObj[phone].price;
      }
    });
  }
}