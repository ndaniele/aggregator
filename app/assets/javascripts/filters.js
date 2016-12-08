//MODULE
var agtrApp = angular.module('agtrApp', ['ui.router', 'templates', 'Devise']);

 //Filters

agtrApp.filter('questionStatsFilter', function() {
 
  return function(question) {
            var yesArray = [];
            var noArray = [];
             
           question.answers.forEach(function(answer) {     
               if (answer.input === "Yes") {
                   yesArray.push(answer);
               };
               if (answer.input === "No") {
                   noArray.push(answer);
               };
            });
            
            var yesTotal = yesArray.length;
            var noTotal = noArray.length; 
            
           if (yesTotal > noTotal) {
                   message = "YES is the winner! " 
                       + "total Yes votes: " + yesTotal 
                       + " total No votes: " + noTotal ;
               } else {
                   message = "No is the winner! " 
                       + "total No votes: " + noTotal 
                       + " total Yes votes: " + yesTotal ;
               };
               
            return message;
        };
  
});