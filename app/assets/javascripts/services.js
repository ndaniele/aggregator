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
           questionAnswers.forEach(function(answer) {
               var yesArray = [];
               var noArray = [];
               if (answer === "Yes") {
                   yesArray.push(answer);
               };
               if (answer === "No") {
                   noArray.push(answer);
               };
               if (yesArray.length > noArray.length) {
                   message = "yes is the winner!";
               } else {
                   message = "no is the winner";
               };
               
               return message;
               console.log(message);
            })
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

.service('QuestionStatsService', [ function() {
    
        this.makeStats = function(questionAnswers) {
           questionAnswers.forEach(function(answer) {
               var yesArray = [];
               var noArray = [];
               if (answer === "Yes") {
                   yesArray.push(answer);
               };
               if (answer === "No") {
                   noArray.push(answer);
               };
               if (yesArray.length > noArray.length) {
                   message = "yes is the winner!";
               } else {
                   message = "no is the winner";
               };
               
               return message;
               console.log(message);
            })
        };
}])
