'use strict';

angular.module('fs3App')
.controller('ContactCtrl', ['$scope', function($scope) {

  $scope.showForm = true;
  $scope.showSuccess = false;
  $scope.update = function(user) {
    $scope.showForm = false;
    $scope.showSuccess = true;
  };
  $scope.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();
}]);
