//MODULE
angular
    .module('agtrApp')

//SERVICES
    .service('QuestionsService', ['$http', function($http) {
        
        this.getQuestions = function() {
           return $http.get('/questions/my_questions');
       };
        
         this.getAskedQuestions = function() {
           return $http.get('/questions/my_asked_questions');
       };
        
        this.createQuestion = function(newQuestion, checkedGroups) {
            return $http.post('/questions', {query: newQuestion, groups: checkedGroups });
        };
        
        this.updateQuestionVote = function(questionId, voteCount) {
            return $http.patch('/questions/' + questionId, {votes: voteCount });
        };
        
    }])