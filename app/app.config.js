angular.
  module('phoneShop').
  config(['$stateProvider', '$urlRouterProvider', AppConfig]);

function AppConfig($stateProvider, $urlRouterProvider) {
  $stateProvider.state('phoneList', {
    url: '/phones',
    template: '<phone-list></phone-list>'
  });

  $stateProvider.state('phoneDetail', {
    url: '/phones/:phoneId',
    template: '<phone-detail></phone-detail>'
  });

  $stateProvider.state('cartDetail', {
    url: '/cart',
    template: '<cart-detail></cart-detail>'
  });

  $urlRouterProvider.otherwise('/phones');
}