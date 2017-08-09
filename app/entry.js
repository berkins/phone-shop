require('../node_modules/bootstrap/dist/css/bootstrap.min.css');

require('../node_modules/jquery/dist/jquery.min');
require('../node_modules/bootstrap/dist/js/bootstrap.min');

require('../node_modules/angular/angular.min');
require('../node_modules/angular-resource/angular-resource.min');
require('../node_modules/angular-ui-router/release/angular-ui-router.min');

require('./app');
require('./app.config');

require('./core/core.module');
require('./core/checkmark/checkmark.filter');
require('./core/phone/phone.module');
require('./core/phone/phone.service');
require('./core/cart/cart.module');
require('./core/cart/cart.service');

require('./phone-list/phone-list.component');
require('./phone-detail/phone-detail.component');
require('./cart-short/cart-short.component');
require('./cart-detail/cart-detail.component');