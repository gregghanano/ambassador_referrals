myApp.controller('mainController', function ($scope, $location, $routeParams, localStorageService){
	$scope.links = localStorageService.get('links');
	$scope.landingId = $routeParams.link;

	var url = "http://localhost:8000/#/landing/?link=";

	console.log("links /// ", $scope.links);
	if($routeParams.link){
		console.log('welcome ' + $scope.landingId);
		console.log($scope.links);
		for(var obj in $scope.links){
			console.log($scope.links[obj]);
			if($scope.links[obj].name == $scope.landingId){
				console.log("link name = " + $scope.landingId + " and the clicks = " + $scope.links[obj].clicks);
				$scope.links[obj].clicks += 1;
			}
		}
		localStorageService.set('links', $scope.links);
	}

	$scope.addLink = function(){
		var newUrl = url+$scope.newLink.name;
		$scope.newLink.url = newUrl;
		$scope.newLink.clicks = 0;
		$scope.links.push($scope.newLink);
		localStorageService.set('links', $scope.links);
		$scope.newLink = {};
	}
})