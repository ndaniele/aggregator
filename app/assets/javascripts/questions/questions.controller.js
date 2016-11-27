//MODULE
angular
    .module('agtrApp')

//CONTROLLER

    .controller('questionsController', ['$scope', '$http', 'questionsService', function($scope, $http, questionsService) {
    
    $scope.name = "Nick is asking a question"
        
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
    
}]);