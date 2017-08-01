angular.
  module('phoneShop').
  config(['$locationProvider', '$routeProvider', AppConfig]);

function AppConfig($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
    when('/phones', {
      template: '<phone-list></phone-list>'
    }).
    when('/phones/:phoneId', {
      template: '<phone-detail></phone-detail>'
    }).
    when('/cart', {
      template: '<cart-detail></cart-detail>'
    }).
    otherwise('/phones');
}