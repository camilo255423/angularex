'use strict';

/* Controllers */

var app = angular.module('app', []);

app.controller('controlador', ['$scope', '$http',
  function($scope, $http) {
  $scope.y=0;
  $scope.x=1;
  $scope.f1=function()
	{

		if($scope.x<18)
		{
			$scope.y='Menor de edad';
		}
		else
		{
			$scope.y='Mayor de edad';
		}
	};
  }]);

app.controller('CartController', ['$scope', 
  function($scope) {
  $scope.items = [
{title: 'Paint pots', quantity: 8, price: 3.95},
{title: 'Polka dots', quantity: 17, price: 12.95},
{title: 'Pebbles', quantity: 5, price: 6.95}
];
$scope.remove = function(index) {
//$scope.items.push({title: 'Paint pots', quantity: 8, price: 3.95});
//$scope.items.splice(index, 1);
$scope.items[1].title="yuuuuju";
};
}]);


