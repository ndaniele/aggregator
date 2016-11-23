//ROUTES

agtrApp.config(function($stateProvider) {
    $stateProvider
    
    .state('home', {
        url: '/',
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    })
    
        .state('home.questions', {
            url: 'questions',
            templateUrl: 'pages/questions.html',
            controller: 'questionsController'
        })

        .state('home.myGroups', {
            url: 'mygroups',
            templateUrl: 'pages/myGroups.html',
            controller: 'groupController'
        })

        .state('home.allGroups', {
            url: 'allgroups',
            templateUrl: 'pages/allGroups.html',
            controller: 'groupController'
        })
    
        .state('home.newGroup', {
            url: 'group/new',
            templateUrl: 'pages/newGroup.html',
            controller: 'groupController'
        })  
})

