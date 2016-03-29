'use strict';
var app = angular.module('fs3App');
var userId = 1;

app
.controller('InscriptionCtrl', ['$scope','Post', function($scope,Post) {

  $scope.showForm = true;
  $scope.showSuccess = false;
  $scope.update = function(user) {
    $scope.showForm = false;
    $scope.showSuccess = true;
    // SAVE : Crée un nouveau Post
    var myPostObj = {email: user.email, password: user.password, firstname: user.firstname, lastname: user.lastname};
    Post.save(myPostObj);
    id++;
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
