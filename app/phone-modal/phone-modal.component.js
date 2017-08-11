angular.
  module('phoneShop').
  component('phoneModal', {
    templateUrl: 'phone-modal/phone-modal.template.html',
    bindings: {
      close: '&',
      dismiss: '&',
      modalInstance: '<',
      resolve: '<'
    },
    controller: [ phoneModalController ]
  });

function phoneModalController() {
  var vm = this;

  vm.cnt      = 1;
  vm.$onInit  = onInit;
  vm.ok       = ok;
  vm.cancel   = cancel;
  vm.cntMinus = cntMinus;
  vm.cntPlus  = cntPlus;

  function onInit() {
    vm.phone = vm.resolve.phone;
  };

  function ok() {
    vm.close({$value: vm.cnt});
  };

  function cancel() {
    vm.dismiss({$value: 'cancel'});
  };

  function cntMinus() {
    vm.cnt--;
    if (vm.cnt < 1) {
      vm.cnt = 1;
    }
  }

  function cntPlus() {
    vm.cnt++;
  }
}