'use strict';
var app = angular.module('fs3App');

app.controller('AppxCommentCtrl', ['$scope', 'postComment', 'commentServices', function($scope,postComment, commentServices) {
	$scope.connexion = function(user){
		var apiUrl = 'https://crispesh.herokuapp.com/api';
	};

	$scope.userName = localStorage.getItem('Username');

	$scope.createComment = function(omdbid) {
		var aPost = {body: $scope.commentText, movie_id: omdbid, status: 0};
		postComment.save(aPost);
		$scope.refresh();
	};
	
	$scope.deleteComment = function(commentID)
	{
		commentServices.delete({id:commentID});
		for (var i = 0; i < $scope.comments.length; i++)
		{
			if ($scope.comments[i].id == commentID)
			{
				delete $scope.comments[i];
			}
		}
	};
	
	$scope.refresh = function()
	{
		window.location.reload();
	};
}]);
