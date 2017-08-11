require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

require('jquery');
require('bootstrap');

require('angular');
require('angular-resource');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('ng-mask');

require('../external_modules/ya-map-2.1');

require('./app');
require('./app.config');

require('./core/core.module');
require('./core/phone/phone.service');
require('./core/cart/cart.service');
require('./core/checkmark/checkmark.filter');
require('./core/price/price.filter');

require('./phone-list/phone-list.component');
require('./phone-detail/phone-detail.component');
require('./phone-modal/phone-modal.component');
require('./cart-short/cart-short.component');
require('./cart-detail/cart-detail.component');