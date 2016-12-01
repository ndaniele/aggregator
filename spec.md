# Specifications for the Angular Assessment

Specs:
- [x] Use Angular to build the app      
- [x] Must contain some sort of nested views
        - index page is nested inside of    application.html.erb using:
                <%= yield %>
        - Home page is nested inside of index.html using:
                <ui-view></ui-view>
        - All other views are nested inside of Home View using:
                <div ui-view></div>
        

- [x] Must contain some sort of searching as well as filtering based on some
criteria. Ex: All items in the "fruit" category, or all tasks past due
    - serach box for searching all groups by name on allgroups.html: 
    
        <input ng-model="search" placeholder="search all groups"/>
        <div ng-repeat="group in groups | filter:search"></div>
        

- [x] Must contain at least one page that allows for dynamic updating of a single field of a resource. Ex: Allow changing of quantity in a shopping cart
    - Asked Questions page contains answers which are updated based on new answers to questions

- [x] Links should work correctly. Ex: Clicking on a product in a list, should take you to the show page for that product

- [x] Data should be validated in Angular before submission
    - Vaidate the presence of a question. 
            <form name="newQuestionForm">
                <input 
                    name="newQuestion" 
                    required="required" 
                    type="text" 
                    ng-model="newQuestion" 
                    class="form-control" />
                
                    <div ng-if="newQuestionForm.newQuestion.$touched && newQuestionForm.newQuestion.$error.required">
                    Question is required!
                    </div>
                </form>

- [x] Must talk to the Rails backend using $http and Services
    - all services use $http. for example:
    
         .service('QuestionsService', ['$http', function($http) {
        
        this.getQuestions = function() {
           return $http.get('/questions/my_questions');
       };
        
         this.getAskedQuestions = function() {
           return $http.get('/questions/my_asked_questions');
       };
        
        this.createQuestion = function(newQuestion, checkedGroups) {
            return $http.post('/questions', {query: newQuestion, user_id: 1, group_id: 7, groups: checkedGroups });
        };
    

- [x] Your README.md includes a short description, install instructions, a contributors guide and a link to the license for your code

Confirm
- [x] You have a large number of small Git commits
- [x] Your commit messages are meaningful
- [x] You made the changes in a commit that relate to the commit message
- [x] You don't include changes in a commit that aren't related to the commit message
