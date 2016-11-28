//MODULE
angular
    .module('agtrApp')

//SERVICES
    .service('questionsService', ['$http', function($http) {
    
    this.getQuestions = function() {
            return $http.get('/questions')
                        .then(handleResponse)
                        .catch(handleError)
        }

        function handleResponse(response) {
            console.log(response)
            return response.data  
        }

        function handleError(error) {
            console.log(error)
        }
    
    }])

    .service('GroupService', ['$http', function($http) {
    
       this.getGroups = function() {
           return $http.get('/groups');
       };
        
        this.createGroup = function(newGroup) {
            return $http.post('/groups', {groupname: newGroup});
        };
    }])