'use strict';

angular.module('fs3App')
.controller('ContactCtrl', ['$scope','contactService', function($scope,contactService) {

  $scope.showForm = true;
  $scope.showSuccess = false;
  $scope.update = function() {
    $scope.showForm = false;
    $scope.showSuccess = true;
    var myPostObj = {
      email: $scope.email,
      reason: $scope.reason,
      body: $scope.agreeSign,
      name: $scope.name
    };
    contactService.save(myPostObj);
  };
  $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
  };

  $scope.reset();
}]);
