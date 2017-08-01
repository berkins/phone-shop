angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$scope', 'Phone', 'Cart', PhoneListController]
  });

function PhoneListController($scope, Phone, Cart) {
  $scope.phones    = Phone.query();
  $scope.orderProp = 'price';
  $scope.query     = '';
  $scope.modal     = {};
  $scope.addToCart = addToCart;
  $scope.openModal = openModal;

  function addToCart(phoneId) {
    Cart.addToCart(phoneId);
  }

  function openModal(phone) {
    $scope.modal.phone = phone;
  }
}