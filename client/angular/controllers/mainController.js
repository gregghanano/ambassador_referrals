myApp.controller('mainController', function ($scope, $location, $routeParams, localStorageService){
	$scope.links = localStorageService.get('links');
	$scope.landingId = $routeParams.link;
	$scope.editName = $routeParams.name;
	console.log($routeParams.name);

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

	$scope.changeName = function(){
		console.log($scope.newName);
		console.log($scope.editName);
		for(var obj in $scope.links){
			if($scope.links[obj].name == $scope.editName){
				console.log("changing the name here!");
				$scope.links[obj].name = $scope.newName;
				console.log("new name is here //// ", $scope.links[obj].name);
				var newUrl = url+$scope.newName;
				$scope.links[obj].url = newUrl;
			}
		}
		localStorageService.set('links', $scope.links);
		$location.path('/');
	}

	$scope.removeLink = function(link){
		console.log('remove function here');
		console.log(link);
		var index = $scope.links.indexOf(link);
		console.log("link index = ", index);
		$scope.links.splice(index, 1);
		console.log("new scope links ", $scope.links);
		localStorageService.set('links', $scope.links);
	}
})