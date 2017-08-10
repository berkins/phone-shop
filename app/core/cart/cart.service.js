angular.
  module('core.cart').
  factory('Cart', [ 'Phone', CorePhone]);

function CorePhone(Phone) {
  var cart = {};

  return {
    addToCart:      addToCart,
    deleteFromCart: deleteFromCart,
    currentCart:    currentCart
  };

  function addToCart(phoneId, cnt) { 
    if (phoneId in cart) {
      cart[phoneId] += cnt;
    } else {
      cart[phoneId] = cnt;
    }
  }

  function deleteFromCart(phoneId) {
    if (phoneId in cart) {
      delete cart[phoneId];
    }
    return cart;
  }

  function currentCart() { return cart; }
}
