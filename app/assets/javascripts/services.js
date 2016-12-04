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
            return $http.post('/questions', {query: newQuestion, user_id: 1, group_id: 7, groups: checkedGroups });
        };
        
        
        this.makeStats = function(questionAnswers) {
            var yesArray = [];
            var noArray = [];
             
           questionAnswers.forEach(function(answer) {     
               if (answer.input === "Yes") {
                   yesArray.push(answer);
               };
               if (answer.input === "No") {
                   noArray.push(answer);
               };
            });
            
            var yesTotal = yesArray.length;
            var noTotal = noArray.length; 
            
           if (yesTotal > noTotal) {
                   message = "TOTAL YES VOTES: " + yesTotal + ". yes is the winner!";
               } else {
                   message = "TOTAL NO VOTES: " + noTotal + ". no is the winner";
               };
               
            return message;
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
    
       //this.getGroups = function() {
         //  return $http.get('/groups');
       //};
        
        this.createAnswer = function(newAnswer, questionId) {
            return $http.post('/questions/' + questionId + '/answers', {input: newAnswer, question_id: questionId, user_id: 1});
        };
    }])

 .service('CommentService', ['$http', function($http) {
    
       //this.getGroups = function() {
         //  return $http.get('/groups');
       //};
        
        this.createComment = function(newComment, questionId) {
            return $http.post('/questions/' + questionId + '/comments', {comment: newComment, question_id: questionId, user_id: 1});
        };
    }])