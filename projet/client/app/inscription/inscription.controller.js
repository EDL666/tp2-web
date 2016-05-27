'use strict';
var app = angular.module('fs3App');

app
.controller('InscriptionCtrl', ['$scope','PostInscriptionService','toastr', function($scope,Post,toastr) {

  $scope.showForm = true;
  $scope.showSuccess = false;
  $scope.theUser;
  $scope.update = function() {
    // SAVE : Crée un nouveau Post
    var myPostObj = {email: $scope.userEmail, password: $scope.userPassword, firstname: $scope.userFirstName, lastname: $scope.userLastname};
    Post.save(myPostObj,function(response){
      $scope.showForm = false;
      $scope.showSuccess = true;
    },
    function(error){
      console.log(error.data);
      $scope.error = error;
      toastr.error('Cette adresse courriel est déja utilisé', 'Erreur');
    });
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
