//MODULE
angular
    .module('agtrApp')

//CONTROLLER

    .controller('questionsController', ['$scope', '$http', function($scope, $http) {
    
    //$scope.getQuestions();
        
    $scope.name = "Nick is asking a question"
        
    //$scope.questions = questionsService.getQuestions();
    
    $scope.questions = '';
    
    //$scope.questions = $scope.getQuestions;
    
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
    
        
$scope.getQuestions = function() {
  return $http.get('/questions')
                       .then(function(result) {
                        console.log(result.data);
                         //return $scope.httpQuestions = result.data
                        $scope.questions = result.data
                       })
}

}]);