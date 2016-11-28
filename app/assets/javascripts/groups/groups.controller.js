//MODULE
angular
    .module('agtrApp')

//CONTROLLER
    .controller('groupController', ['$scope', 'GroupService', function($scope, GroupService) {
        
        $scope.groups = '';
        
        GroupService
            .getGroups()
            .then(function(response) {
                $scope.groups = response.data;
        });

        $scope.newGroup = '';
        
        $scope.makeNewGroup = function() {
            GroupService
                .createGroup($scope.newGroup)
                .then(function() {
                    alert('Group Created!');
            });
        };

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
        
//activate()
//
//function activate() {
//   return $http.get('/groups')
//                      .then(function(result) {
//                       //console.log(result.data);
//                       return $scope.groups = result.data
//                      });
//}
        
}]);

