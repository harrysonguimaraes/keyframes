angular.module('app', [])
  .controller('HomeController', function($scope) {

  	$scope.hover = false;
  	$scope.exibeLupa= true;
  	$scope.mudar = function(){
  		$scope.hover = true;
	  	$scope.exibeLupa= false;


  	};


  });