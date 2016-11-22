//MODULE
var agtrApp = angular.module('agtrApp', ['ui.router']);

//SERVICES
agtrApp.service('groupService', function() {
    
    this.groups = [
        {
            name: 'testGroup1'
        },
        {
            name: 'testGroup2'
        },
        {
            name: 'testGroup3'
        },
    ]
})


//ROUTES

agtrApp.config(function($stateProvider) {
    $stateProvider
    
    .state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
    .state('home.questions', {
        url: 'questions',
        templateUrl: 'pages/questions.html',
        controller: 'questionsController'
    })
    
    .state('home.myGroups', {
        url: 'mygroups',
        templateUrl: 'pages/myGroups.html',
        controller: 'groupController'
    })
})


//CONTROLLERS

agtrApp.controller('homeController', ['$scope', function($scope) {
    
    $scope.name = "nick"
    
}]);

agtrApp.controller('questionsController', ['$scope', function($scope) {
    
    $scope.test = 'Test'
    
    $scope.questions = [
        {
            id: 1,
            query: "test question 1",
            user_id: 1,
            group: "Group1"
        },
          {
            id: 2,
            query: "test question 2",
            user_id: 2,
            group: "Group2"
        },
          {
            id: 3,
            query: "test question 3",
            user_id: 3,
            group: "Group3"
        },
    ]
    
}]);

agtrApp.controller('groupController', ['$scope', 'groupService', function($scope, groupService) {
    
    $scope.groups = groupService.groups;
    
}]);