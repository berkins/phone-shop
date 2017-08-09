angular.
  module('phoneShop').
  component('cartShort', {
    templateUrl: 'cart-short/cart-short.template.html',
    controller: ['$scope', 'Phone', 'Cart', CartShortController]
  });

function CartShortController($scope, Phone, Cart) {
  var self = this;
  self.short = {cnt: 0, sum: 0};

  $scope.$watch(
    getCurrentCart,
    setShortCart,
    true
  );

  var self = this;
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
      self.short.cnt += currentCart[phone];
      self.short.sum += currentCart[phone] * phonesObj[phone].price;
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
      self.short = {cnt: 0, sum: 0};
      for (phone in current) {
        self.short.cnt += current[phone];
        self.short.sum += current[phone] * phonesObj[phone].price;
      }
    });
  }
}