//MODULE
angular
    .module('agtrApp')

//SERVICES
.service('CommentService', ['$http', function($http) {
        
        this.createComment = function(newComment, questionId) {
            return $http.post('/questions/' + questionId + '/comments', {comment: newComment, question_id: questionId});
        };
    }])