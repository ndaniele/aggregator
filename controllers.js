//CONTROLLERS

agtrApp.controller('homeController', ['$scope', function($scope) {
    
    $scope.name = "nick"
    
}]);

agtrApp.controller('questionsController', ['$scope', 'questionsService', function($scope, questionsService) {
    
    $scope.questions = questionsService.questions;
    
    $scope.yesClick = function() {
        console.log("YES was clicked");
    };
    
    $scope.noClick = function() {
        console.log("NO was clicked");
    };
    
    $scope.test = 'Test';
    
    $scope.newQuestion = '';
    
}]);

agtrApp.controller('groupController', ['$scope', 'groupService', function($scope, groupService) {
    
    $scope.groups = groupService.groups;
    
    $scope.newGroup = '';
    
    $scope.postClick = function() {
        console.log("POST was clicked");
    };
    
    $scope.checkClick = function(groupName) {
        console.log(groupName + " box was checked");
    };
    
    $scope.joinClick = function(groupName) {
        console.log(groupName + " was joined");
    };
    
    $scope.newGroupClick = function(groupName) {
        console.log(groupName + " was created");
    };
}]);
