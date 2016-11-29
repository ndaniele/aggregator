//MODULE
angular
    .module('agtrApp')

//SERVICES
    .service('QuestionsService', ['$http', function($http) {
        
        this.getQuestions = function() {
           return $http.get('/questions');
       };
        
        this.createQuestion = function(newQuestion, checkedGroups) {
            return $http.post('/questions', {query: newQuestion, user_id: 1, group_id: 7, groups: checkedGroups });
        };
   
    
    }])

    .service('GroupService', ['$http', function($http) {
    
       this.getGroups = function() {
           return $http.get('/groups');
       };
        
        this.createGroup = function(newGroup) {
            return $http.post('/groups', {groupname: newGroup});
        };
    }])

   .service('GroupQuestionsService', ['$http', function($http) {
        
        //this.getGroupQuestions = function() {
          // return $http.get('/questions');
      // };
        
        this.createGroupQuestion = function(newGroupQuestion) {
            return $http.post('/questions', {query: newQuestion, user_id: 1, group_id: 7 });
        };
   
    
    }])