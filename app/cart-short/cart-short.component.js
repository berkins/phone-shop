angular.
  module('cartShort').
  component('cartShort', {
    templateUrl: 'cart-short/cart-short.template.html',
    controller: ['$scope', 'Phone', 'Cart', CartDetailController]
  });

function CartDetailController($scope, Phone, Cart) {
  $scope.short = {cnt: 0, sum: 0};

  $scope.$watch(
    getCurrentCart,
    setShortCart,
    true
  );

  var self = this;
  var currentCart = Cart.currentCart();
  var phones = Phone.query();
  phones.$promise.then(function(result) {
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
      $scope.short.cnt += currentCart[phone];
      $scope.short.sum += currentCart[phone] * phonesObj[phone].price;
    }
  });

  function getCurrentCart() { return Cart.currentCart(); }
  function setShortCart(current, prev) {
    var phones = Phone.query();
    phones.$promise.then(function(result) {
      phones = result;
      var phonesObj = phones.reduce(function(obj, cur) {
        obj[cur.id] = {
          name: cur.name,
          price: cur.price,
          imageUrl: cur.imageUrl
        };
        return obj;
      }, {});
      $scope.short = {cnt: 0, sum: 0};
      for (phone in current) {
        $scope.short.cnt += current[phone];
        $scope.short.sum += current[phone] * phonesObj[phone].price;
      }
    });
  }
}