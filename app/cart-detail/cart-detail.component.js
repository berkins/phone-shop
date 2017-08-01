angular.
  module('cartDetail').
  component('cartDetail', {
    templateUrl: 'cart-detail/cart-detail.template.html',
    controller: ['$scope', 'Phone', 'Cart', CartDetailController]
  });

function CartDetailController($scope, Phone, Cart) {
  $scope.cart           = [];
  $scope.deleteFromCart = deleteFromCart;

  var currentCart = Cart.currentCart();
  var phones      = Phone.query();

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
      $scope.cart.push(
        {
          id: phone,
          cnt: currentCart[phone], 
          price: phonesObj[phone].price, 
          name: phonesObj[phone].name, 
          imageUrl: phonesObj[phone].imageUrl
        }
      );
    }
  });

  function deleteFromCart(phoneId) {
    currentCart = Cart.deleteFromCart(phoneId);
    phones = Phone.query();
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
      $scope.cart = [];
      for (phone in currentCart) {
        $scope.cart.push(
          {
            id: phone,
            cnt: currentCart[phone], 
            price: phonesObj[phone].price, 
            name: phonesObj[phone].name, 
            imageUrl: phonesObj[phone].imageUrl
          }
        );
      }
    });
  }
}