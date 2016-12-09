//MODULE
angular
    .module('agtrApp')

//SERVICES
.service('GroupService', ['$http', function($http) {
    
       this.getGroups = function() {
           return $http.get('/groups');
       };
        
        this.getMyGroups = function() {
           return $http.get('/groups/my_groups');
       };
        
        this.createGroup = function(newGroup) {
            return $http.post('/groups', {groupname: newGroup});
        };
        
        this.createGroupMembership = function(groupid) {
            return $http.post('/groups/join', {group_id: groupid})
        };
    }])
