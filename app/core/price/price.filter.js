angular.
  module('core').
  filter('price', function() {
    return function(input) {
    var 
      s = input < 0 ? "-" : "", 
      i = String( parseInt(input = Math.abs(Number(input) || 0).toFixed(2)) ), 
      j = (j = i.length) > 3 ? j % 3 : 0;

      return s + (j ? i.substr(0, j) + ' ' : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + ' ') + (2 ? '.' + Math.abs(input - i).toFixed(2).slice(2) : "");
    };
  });

