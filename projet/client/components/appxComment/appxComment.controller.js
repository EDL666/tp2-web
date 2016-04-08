'use strict';
var app = angular.module('fs3App');

app.controller('AppxCommentCtrl', ['$scope', 'postComment', function($scope,postComment) {
	$scope.connexion = function(user){
		var apiUrl = 'https://crispesh.herokuapp.com/api';
    
	};
	
	
	
	$scope.createComment = function(omdbid) {
		var aPost = {body: $scope.commentText, movie_id: omdbid, status: 0};
		postComment.save(aPost);
	}
}]);
