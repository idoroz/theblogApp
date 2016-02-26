(function () {
	'use strict';

var app = angular.module('blogApp');


app.controller('PostsCtrl', ['postService','$scope', function(postService, $scope) { 
  	postService.then(function(data){
  		$scope.posts = data.data.posts;
  	})

}]);

}());