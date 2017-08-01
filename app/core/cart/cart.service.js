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

  function addToCart(phoneId) { 
    if (phoneId in cart) {
      cart[phoneId]++;
    } else {
      cart[phoneId] = 1;
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
