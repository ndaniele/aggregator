//MODULE
angular
    .module('agtrApp')

//CONTROLLER

    .controller('questionsController', ['$scope', '$rootScope', 'QuestionsService', 'AnswerService', function($scope, $rootScope, QuestionsService, AnswerService) {
        
    $scope.name = "Nick is asking a question"
    
    $scope.questions = '';
        
        QuestionsService
            .getQuestions()
            .then(function(response) {
                $scope.questions = response.data;
        });
        
    $scope.newQuestion = '';
        
        $scope.makeNewQuestion = function() {
            QuestionsService
                .createQuestion($scope.newQuestion, $rootScope.checkedGroups)
                .then(function() {
                    alert('Question Created and added to groups!');
            });
        };

    
    $scope.comment = '';
        
        
    $scope.newAnswer = '';

    $scope.makeNewAnswer = function(questionId) {
        $scope.newAnswer = 'Yes!!';
        //console.log(questionId);
        
        AnswerService
            .createAnswer($scope.newAnswer, questionId)
            .then(function() {
                alert('You Answered This Question');
        });
    };
    
    $scope.postComment = function() {
        console.log("Comment Was Posted")
    };
    
    $scope.yesClick = function(question) {
        console.log("yes was clicked on " + question);
    };
    
    $scope.noClick = function() {
        console.log("NO was clicked");
    };
    
    $scope.test = 'Test';
    
    //$scope.newQuestion = '';
    
//activate()
//
//function activate() {
//   return $http.get('/questions')
//                      .then(function(result) {
//                       //console.log(result.data);
//                       return $scope.questions = result.data
//                      })
//}

}]);