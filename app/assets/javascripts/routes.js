//MODULE
angular
    .module('agtrApp')

//ROUTES

    .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        controller: 'homeController'
    })
         .state('home.questions', {
                url: 'questions',
                templateUrl: 'questions/questions.html',
                controller: 'questionsController'
        })
    
        .state('home.questionStats', {
                url: 'questions/stats',
                templateUrl: 'questions/questionStats.html',
                controller: 'questionsController'
        })
        
        .state('home.myGroups', {
            url: 'mygroups',
            templateUrl: 'groups/myGroups.html',
            controller: 'groupController'
        })
    
         .state('home.allGroups', {
            url: 'allgroups',
            templateUrl: 'groups/allGroups.html',
            controller: 'groupController'
        })
    
        .state('home.newGroup', {
            url: 'group/new',
            templateUrl: 'groups/newGroup.html',
            controller: 'groupController'
        })  
    
    $urlRouterProvider.otherwise('/')
    
})
    
    
     
 