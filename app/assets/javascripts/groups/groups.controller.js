//MODULE
angular
    .module('agtrApp')

//CONTROLLER
    .controller('groupController', ['$scope', '$rootScope', 'GroupService', function($scope, $rootScope, GroupService) {
           
        $rootScope.checkedGroups = [];
        
        $scope.myGroups = '';
        
        GroupService
            .getMyGroups()
            .then(function(response) {
                return $scope.myGroups = response.data;
        });
        
          $scope.updateMyGroups = function() {
            GroupService
                .getMyGroups()
                .then(function(response) {
                return $scope.myGroups = response.data;
            });
        };
        

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
        
        $scope.newGroupMember = '';
        
        $scope.makeNewGroupMemebership = function(groupid) { //console.log(groupid);
            GroupService
                .createGroupMembership(groupid)
                .then(function(response) {
                    alert('Group joined!');
                return $scope.myGroups.push(response.data);  
            });
            console.log($scope.myGroups);
        };

        $scope.postClick = function() {
            console.log("POST was clicked");
        };

        $scope.checkClick = function(groupId) {
            $rootScope.checkedGroups.push(groupId);
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

