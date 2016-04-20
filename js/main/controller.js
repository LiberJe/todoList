app.controller("parantCtrl",function($scope,$rootScope){
    // $rootScope.tasklist=[];
    // $rootScope.donelist=[];
    $rootScope.taskfilter="";
    // $rootScope.userData="";
    
    if(localStorage.user){
        $rootScope.userData=JSON.parse(localStorage.user);
    }else{
        $rootScope.userData={
            "username":"JeLewine",
            "listgroup":[]
        }
    }
})

app.controller("headCtrl",["$scope","$rootScope",function($scope,$rootScope){
    $scope.transit=function() {
        $rootScope.taskfilter=$scope.taskfilter;
    }
    
    $scope.sidebarStatus=false;
    
    $scope.toggleStatus=function(){
        $scope.sidebarStatus=!$scope.sidebarStatus;
    }
}])

app.controller("sidebarCtrl",["$scope","$rootScope","userData",function($scope,$rootScope,userData){
    $scope.groupName="";
    $scope.groupType="";
    $scope.username=userData.username;
    $scope.listgroup=userData.listgroup;
    $scope.lshow=false;
    
    $scope.addList=function(){
        $scope.lshow=true;
    }
    
    $scope.cancel=function() {
        $scope.lshow=false;
    }
    
    $scope.addon=function(){
        if($scope.groupName){
            userData.listgroup.push({
                "groupname":$scope.groupName,
                "grouptype":$scope.groupType,
                "taskgroup":[]
            })
            
            $scope.groupName="";
            $scope.groupType="";
            $scope.lshow=false;
            
            localStorage.user=JSON.stringify(userData);
        }else{
            alert("任务列表名不能为空");
        }
    }
    
    $scope.selectData=function(index){
        $rootScope.$broadcast("selectgroup(index)");
    }
}])


app.controller("taskCtrl",["$scope","$rootScope","userData",function ($scope,$rootScope,userData) {
    $scope.taskName="";
    $scope.taskDate="";
    $scope.selectgroup=0;
    $scope.groupName=userData.listgroup[$scope.selectgroup].groupname;
    $scope.taskGroup=userData.listgroup[$scope.selectgroup].taskgroup;
    
    $scope.$on("selectgroup",function(index){
        $scope.selectgroup=index;
        $scope.groupName=userData.listgroup[$scope.selectgroup].groupname;
        $scope.taskGroup=userData.listgroup[$scope.selectgroup].taskgroup;
    })
    
    $scope.jshow=false;
    
    $scope.addTask=function() {
        $scope.jshow=true;
    }
    
    $scope.cancel=function() {
        $scope.jshow=false;
    }
    
    $scope.addon=function(){
        if($scope.taskName && $scope.taskDate){
            userData.listgroup[$scope.selectgroup].taskgroup.push({
                "name":$scope.taskName,
                "date":$scope.taskDate
            })
            $scope.taskName="";
            $scope.taskDate="";
            $scope.jshow=false;
            
            localStorage.user=JSON.stringify(userData);
        }else{
            alert("任务名不能为空");
        }
    }
    
    $scope.done=function(index) {
        $rootScope.donelist.push($rootScope.tasklist[index]);
        $rootScope.tasklist.splice(index,1);
    }
    
    $scope.remove=function(index){
        $rootScope.tasklist.splice(index,1);
    }
}])


app.controller("footCtrl",function($scope,$rootScope){
    
})
