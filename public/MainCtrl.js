angular.module('app', []).controller('MainCtrl', ['$scope', '$http', function(scope, http) {
	scope.getVideoID = function() {
		vidID = scope.link;
		console.log(vidID);
	}
}]);