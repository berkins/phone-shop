angular.
  module('phoneShop').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$uibModal', 'Phone', 'Cart', PhoneListController]
  });

function PhoneListController($uibModal, Phone, Cart) {
  var vm = this;
  vm.phones    = Phone.query();
  vm.orderProp = 'price'; // default sort
  // vm.query     = '';
  vm.modal     = {};
  vm.cnt       = 1;

  vm.openComponentModal = openComponentModal;

  function openComponentModal(phone) {
    var modalInstance = $uibModal.open({
      component: 'phoneModal',
      resolve: {
        phone: function () {
          return phone;
        }
      }
    });

    modalInstance.result.then(function(res) {
      Cart.addToCart(phone.id, res);
    });
  };
}