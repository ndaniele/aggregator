//MODULE
var agtrApp = angular.module('agtrApp', ['ui.router', 'templates', 'Devise']);

//CONTROLLERS

agtrApp.controller('homeController', ['$scope', function($scope) {
    
    $scope.name = "nick"
    
}]);
 