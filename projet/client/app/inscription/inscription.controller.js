'use strict';
var app = angular.module('fs3App');

angular.module('fs3App')
.controller('InscriptionCtrl', ['$scope', function($scope) {

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
  };
  $scope.reset();
}]);
var compareTo = function() {
  return {
      require: "ngModel",
      scope: {
          otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {
          ngModel.$validators.compareTo = function(modelValue) {
              return modelValue == scope.otherModelValue;
          };
          scope.$watch("otherModelValue", function() {
              ngModel.$validate();
          });
      }
  };
};
app.directive("compareTo", compareTo);
