myApp.controller('mainController', function ($scope, $location, $routeParams, localStorageService){
	$scope.links = localStorageService.get('links');
	$scope.landingId = $routeParams.link;
	$scope.editName = $routeParams.name;

	var url = "https://hidden-inlet-5616.herokuapp.com/#/landing/?link=";

	if($routeParams.link){
		for(var obj in $scope.links){
			if($scope.links[obj].name == $scope.landingId){
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
		for(var obj in $scope.links){
			if($scope.links[obj].name == $scope.editName){
				$scope.links[obj].name = $scope.newName;
				var newUrl = url+$scope.newName;
				$scope.links[obj].url = newUrl;
			}
		}
		localStorageService.set('links', $scope.links);
		$location.path('/');
	}

	$scope.removeLink = function(link){
		var index = $scope.links.indexOf(link);
		$scope.links.splice(index, 1);
		localStorageService.set('links', $scope.links);
	}
})