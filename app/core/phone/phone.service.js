angular.
  module('core.phone').
  factory('Phone', ['$resource', CorePhone]);

function CorePhone($resource) {
  return $resource('phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: {phoneId: 'phones'},
      isArray: true
    }
  });
}