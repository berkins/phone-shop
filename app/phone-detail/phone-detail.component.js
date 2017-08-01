angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$scope', '$routeParams', 'Phone', 'Cart', PhoneDetailController]
  });

function PhoneDetailController($scope, $routeParams, Phone, Cart) {
  $scope.mainImageUrl = '';
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.setImage(phone.images[0]);
  });
  $scope.setImage  = setImage;
  $scope.addToCart = addToCart;

  function setImage(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }

  function addToCart(phoneId) {
    Cart.addToCart(phoneId);
  }
}