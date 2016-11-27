//MODULE
angular
    .module('agtrApp')

//CONTROLLER
    .controller('groupController', ['$scope', 'groupService', function($scope, groupService) {
    
        $scope.groups = groupService.groups;

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
}]);

