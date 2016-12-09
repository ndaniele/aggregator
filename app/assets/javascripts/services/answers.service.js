//MODULE
angular
    .module('agtrApp')

//SERVICES
 .service('AnswerService', ['$http', function($http) {
    
        this.createAnswer = function(newAnswer, questionId) {
            return $http.post('/questions/' + questionId + '/answers', {input: newAnswer, question_id: questionId});
        };
    }])