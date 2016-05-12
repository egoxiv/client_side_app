angular.module('DoubleDoubleApp')
  .factory('DoubleFactory', DoubleFactory);

DoubleFactory.$inject = ['$http'];

function DoubleFactory($http){

  var LIST_URL = 'http://localhost:3000/api/todos';

  var listFactory = {};
  listFactory.getList = function(){
    return $http.get(LIST_URL);
  };

  return listFactory;

}

