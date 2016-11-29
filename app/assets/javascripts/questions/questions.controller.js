//MODULE
angular
    .module('agtrApp')

//CONTROLLER

    .controller('questionsController', ['$scope', '$rootScope', 'QuestionsService', function($scope, $rootScope, QuestionsService) {
        
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
                    alert('Question Created!');
            });
        };

    
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