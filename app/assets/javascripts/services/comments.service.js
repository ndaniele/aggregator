//MODULE
angular
    .module('agtrApp')

//SERVICES
.service('CommentService', ['$http', function($http) {
        
        this.createComment = function(newComment, question) {
            return $http.post('/questions/' + question.id + '/comments', {comment: newComment, question_id: question.id});
        };
    }])