function skillsMember(){
    return{
        restrict : 'E',
        templateUrl:'modules/skills/views/member.html',
        controllerAs:'vm',
        bindToConroller:true,
        scope: {
            member: '**'
        }
    };
}