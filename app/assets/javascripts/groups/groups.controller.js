//MODULE
angular
    .module('agtrApp')

//CONTROLLER
    .controller('groupController', ['$scope', '$http', 'groupService', function($scope, $http, groupService) {
    
        //$scope.groups = $scope.getGroups;
        
        //$scope.groups = groupService.groups;
        
        $scope.groups = '';

        $scope.newGroup = '';

        $scope.postClick = function() {
            console.log("POST was clicked");
        };

        $scope.checkClick = function(groupName) {
            console.log(groupName + " box was checked");
        };

        $scope.joinClick = function(groupName) {
            console.log(groupName + " was joined");
        };

        $scope.newGroupClick = function(groupName) {
            console.log(groupName + " was created");
        };
        
        $scope.getGroups = function() {
  return $http.get('/groups')
                       .then(function(result) {
                        console.log(result.data);
                         //return $scope.httpQuestions = result.data
                         $scope.groups = result.data
                       })
}
}]);

