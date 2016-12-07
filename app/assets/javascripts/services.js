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
        
    }])

    .service('GroupService', ['$http', function($http) {
    
       this.getGroups = function() {
           return $http.get('/groups');
       };
        
        this.getMyGroups = function() {
           return $http.get('/groups/my_groups');
       };
        
        this.createGroup = function(newGroup) {
            return $http.post('/groups', {groupname: newGroup});
        };
        
        this.createGroupMembership = function(groupid) {
            return $http.post('/groups/join', {group_id: groupid, user_id: 1})
        };
    }])


 .service('AnswerService', ['$http', function($http) {
    
        this.createAnswer = function(newAnswer, questionId) {
            return $http.post('/questions/' + questionId + '/answers', {input: newAnswer, question_id: questionId, user_id: 1});
        };
    }])

 .service('CommentService', ['$http', function($http) {
        
        this.createComment = function(newComment, questionId) {
            return $http.post('/questions/' + questionId + '/comments', {comment: newComment, question_id: questionId, user_id: 1});
        };
    }])