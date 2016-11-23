//CONTROLLERS

agtrApp.controller('homeController', ['$scope', function($scope) {
    
    $scope.name = "nick"
    
}]);

agtrApp.controller('questionsController', ['$scope', function($scope) {
    
    $scope.yesClick = function() {
        console.log("YES was clicked");
    };
    
    $scope.noClick = function() {
        console.log("NO was clicked");
    };
    
    $scope.test = 'Test';
    
    $scope.newQuestion = '';
    
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
    ];
    
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
