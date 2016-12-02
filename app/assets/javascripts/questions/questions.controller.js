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
    
     $scope.askedQuestions = '';
        
        QuestionsService
            .getAskedQuestions()
            .then(function(response) {
                $scope.askedQuestions = response.data;
        });
        
    $scope.newQuestion = '';
        
        $scope.makeNewQuestion = function() {
            QuestionsService
                .createQuestion($scope.newQuestion, $rootScope.checkedGroups)
                .then(function() {
                    alert('Question Created and added to groups!');
                    $scope.newQuestion = '';
            });
        };
    
    $scope.stats = '';
        
        $scope.getQuestionStats = function(questionAnswers) {
            QuestionsService
                .makeStats(questionAnswers)
                console.log(message);
            //console.log(yesTotal);
            //console.log(noTotal);
            $scope.stats = message;
        };

    
    $scope.comment = '';
        
        
    $scope.newAnswer = '';

    $scope.makeNewYesAnswer = function(questionId) {
        $scope.newAnswer = 'Yes';
        console.log(questionId);
        
        AnswerService
            .createAnswer($scope.newAnswer, questionId)
            .then(function() {
                alert('You Answered Yes to This Question');
        });
    };
    
    $scope.makeNewNoAnswer = function(questionId) {
        $scope.newAnswer = 'No';
        console.log(questionId);
        
        AnswerService
            .createAnswer($scope.newAnswer, questionId)
            .then(function() {
                alert('You Answered NO to This Question');
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