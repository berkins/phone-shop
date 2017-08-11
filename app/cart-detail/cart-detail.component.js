angular.
  module('phoneShop').
  component('cartDetail', {
    templateUrl: 'cart-detail/cart-detail.template.html',
    controller: ['$scope', 'Phone', 'Cart', CartDetailController]
  });

function CartDetailController($scope, Phone, Cart) {
  var vm = this;
  vm.cart           = [];
  vm.total          = 0;
  vm.deleteFromCart = deleteFromCart;
  vm.beforeInit     = beforeInit;
  vm.mapClick       = mapClick;
  vm.open           = open;
  vm.submitForm     = submitForm;

  vm.formData = {
    address: '',
    phone: '',
    firstname: '',
    lastname: '',
    date: new Date()
  };

  var currentCart = Cart.currentCart();
  var phones      = Phone.query({}, function(result) {
    phones = result;
    var phonesObj = phones.reduce(function(obj, cur) {
      obj[cur.id] = {
        name: cur.name,
        price: cur.price,
        imageUrl: cur.imageUrl
      };
      return obj;
    }, {});
    vm.total = 0;
    for (phone in currentCart) {
      vm.cart.push(
        {
          id: phone,
          cnt: currentCart[phone], 
          price: phonesObj[phone].price, 
          name: phonesObj[phone].name, 
          imageUrl: phonesObj[phone].imageUrl
        }
      );
      vm.total += currentCart[phone] * phonesObj[phone].price;
    }
  });

  vm.opened = false;
  vm.dateOptions = {
    startingDay: 1
  };

  function open() {
    vm.opened = true;
  };

  vm.geoObjects = [];
  vm.center     = [37.64,55.76]; // Moscow
  function beforeInit() {
    ymaps.geolocation.get({
      provider: 'browser',
      mapStateAutoApply: true
    }).then(function (result) {
      var coords = result.geoObjects.position;
      vm.center = coords;
      setPoint(coords);
    });
  };

  function mapClick(e) {
    setPoint( e.get('coords') );
  };

  function setPoint(coords) {
    ymaps.geocode(coords).then(function (res) {
      var names = [];
      res.geoObjects.each(function (obj) {
        names.push(obj.properties.get('name'));
      });
      vm.formData.address = names[0];
      vm.geoObjects = [{
        geometry: {
          type: 'Point',
          coordinates: coords
        },
        properties: {
          balloonContent: names[0]
        }
      }];
      $scope.$digest();
    });
  }

  function deleteFromCart(phoneId) {
    currentCart = Cart.deleteFromCart(phoneId);
    phones = Phone.query({}, function(result) {
      phones = result;
      var phonesObj = phones.reduce(function(obj, cur) {
        obj[cur.id] = {
          name: cur.name,
          price: cur.price,
          imageUrl: cur.imageUrl
        };
        return obj;
      }, {});
      vm.cart = [];
      vm.total = 0;
      for (phone in currentCart) {
        vm.cart.push(
          {
            id: phone,
            cnt: currentCart[phone], 
            price: phonesObj[phone].price, 
            name: phonesObj[phone].name, 
            imageUrl: phonesObj[phone].imageUrl
          }
        );
        vm.total += currentCart[phone] * phonesObj[phone].price;
      }
    });
  }

  function submitForm() {
    console.log(vm.formData);
  }
}