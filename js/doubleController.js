angular.module('DoubleDoubleApp')
  .controller('DoubleController', DoubleController);

DoubleController.$inject = ['DoubleFactory'];

function DoubleController(DoubleFactory){
  var self = this;
  self.all = [];
  self.api = DoubleFactory;

  self.api.getList().success(function(data){
    console.log(data);
    self.all = data;
  });


}
