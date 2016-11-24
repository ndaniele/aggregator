//CONTROLLERS

agtrApp.controller('homeController', ['$scope', function($scope) {
    
    $scope.name = "nick"
    
}]);

agtrApp.controller('questionsController', ['$scope', '$http', 'questionsService', function($scope, $http, questionsService) {
    
    $scope.questions = questionsService.questions;
    
    $scope.comment = '';
    
    $scope.postComment = function() {
        console.log("Comment Was Posted")
    };
    
    $scope.yesClick = function() {
        console.log("YES was clicked");
    };
    
    $scope.noClick = function() {
        console.log("NO was clicked");
    };
    
    $scope.test = 'Test';
    
    $scope.newQuestion = '';
    
    
    
    $http.get('http://http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=2&appid=7ce2964527dc9412f3544e113a813c8e', {
        callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }})
    .success(function(result) {
       
        $scope.httpQuestions = result; 
        console.log($scope.httpQuestions);
    });
    
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
