'use strict';
var app = angular.module('fs3App');
var currentComment = 0;

app.controller('AppxCommentCtrl', ['$scope', 'postComment', 'commentServices', 'APP_API_URL',function($scope,postComment, commentServices, APP_API_URL) {
	$scope.connexion = function(user){
		var apiUrl = APP_API_URL;
	};

	$scope.userName = localStorage.getItem('Username');
	$scope.showEdit = false;

	$scope.createComment = function(omdbid) {
		var aPost = {body: $scope.commentText, movie_id: omdbid, status: 0};
		postComment.save(aPost);
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

	$scope.updateComment = function(commentID,comment)
	{
		console.log(commentID);
			$scope.showEdit = true;
	}
}]);
