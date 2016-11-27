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

    .service('groupService', function() {
    
        this.groups = [
            {
                name: 'testGroup1',
                members: 'member1, member2'
            },
            {
                name: 'testGroup2',
                members: 'member3, member4'
            },
            {
                name: 'testGroup3',
                members: 'member5, member6'
            },
        ]
    })