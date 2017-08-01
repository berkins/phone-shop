angular.module('phoneShop', [
  'ngRoute',
  'core',
  'phoneList',
  'phoneDetail',
  'cartShort',
  'cartDetail'
]);

require('./app.config');

require('./core/core.module');

require('./core/checkmark/checkmark.filter');

require('./core/phone/phone.module');
require('./core/phone/phone.service');

require('./core/cart/cart.module');
require('./core/cart/cart.service');

require('./phone-list/phone-list.module');
require('./phone-list/phone-list.component');

require('./phone-detail/phone-detail.module');
require('./phone-detail/phone-detail.component');

require('./cart-short/cart-short.module');
require('./cart-short/cart-short.component');

require('./cart-detail/cart-detail.module');
require('./cart-detail/cart-detail.component');