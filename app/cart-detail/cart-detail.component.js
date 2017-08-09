angular.
  module('phoneShop').
  component('cartDetail', {
    templateUrl: 'cart-detail/cart-detail.template.html',
    controller: ['Phone', 'Cart', CartDetailController]
  });

function CartDetailController(Phone, Cart) {
  var self = this;
  self.cart           = [];
  self.deleteFromCart = deleteFromCart;

  var currentCart = Cart.currentCart();
  var phones      = Phone.query({}, function(result) {
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
      self.cart.push(
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
    phones = Phone.query({}, function(result) {
      phones = result;
      var phonesObj = phones.reduce(function(obj, cur) {
        obj[cur.id] = {
          name: cur.name,
          price: cur.price,
          imageUrl: cur.imageUrl
        };
        return obj;
      }, {});
      self.cart = [];
      for (phone in currentCart) {
        self.cart.push(
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