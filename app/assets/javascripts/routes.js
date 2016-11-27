//MODULE
angular
    .module('agtrApp')

//ROUTES

    .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'homeController as vm'
    })
         .state('home.questions', {
                url: 'questions',
                templateUrl: 'questions/questions.html',
                controller: 'questionsController'
        })
        
        .state('home.myGroups', {
            url: 'mygroups',
            templateUrl: 'groups/myGroups.html',
            controller: 'groupController'
        })
    
    $urlRouterProvider.otherwise('/')
    
})
    
    
     
 