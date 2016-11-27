//MODULE
angular
    .module('agtrApp')

//FACTORIES
    .factory('QuestionFactory', QuestionFactory)

function QuestionFactory($http) {
    
    return {
        getQuestions: getQuestions
        //getUserQuestions: getUserQuestions,
        //createQuestion: createQuestion,
        //updateQuestion: updateQuestion,
        //deleteQuestion: deleteQuestion
    }
    
    function getQuestions() {
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
    
}