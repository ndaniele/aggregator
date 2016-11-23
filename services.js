//SERVICES
agtrApp.service('groupService', function() {
    
    this.groups = [
        {
            name: 'testGroup1',
            members: 'member1, member2'
        },
        {
            name: 'testGroup2',
            members: 'member3, member4'
        },
        {
            name: 'testGroup3',
            members: 'member5, member6'
        },
    ]
})

agtrApp.service('questionsService', function() {
    
    this.questions = [
        {
            id: 1,
            query: "test question 1",
            user_id: 1,
            group: "Group1"
        },
          {
            id: 2,
            query: "test question 2",
            user_id: 2,
            group: "Group2"
        },
          {
            id: 3,
            query: "test question 3",
            user_id: 3,
            group: "Group3"
        },
    ];
})

