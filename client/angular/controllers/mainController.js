myApp.controller('mainController', function ($scope, $location, $routeParams, localStorageService){
	$scope.links = [];

	var url = "http://localhost:8000/#/landing/?link=";

	$scope.addLink = function(){
		var newUrl = url+$scope.newLink.name;
		$scope.newLink.url = newUrl;
		$scope.newLink.clicks = 0;
		$scope.links.push($scope.newLink);
		$scope.newLink = {};
	}
})