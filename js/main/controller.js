app.controller("parantCtrl",function($scope,$rootScope){
    $rootScope.taskfilter="";

})

app.controller("headCtrl",["$scope","$rootScope","userData","selectgroup",function($scope,$rootScope,userData,selectgroup){
    $scope.tasklist=userData.listgroup[selectgroup.index];
    
    $scope.transit=function() {
        $rootScope.taskfilter=$scope.taskfilter;
    }
    
    $scope.sidebarStatus=false;
    
    $scope.$on("setlistname",function(){
        $scope.tasklist=userData.listgroup[selectgroup.index];
    })
}])

app.controller("sidebarCtrl",["$scope","$rootScope","userData","selectgroup",function($scope,$rootScope,userData,selectgroup){
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
                "taskgroup":[],
                "donegroup":[]
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
        selectgroup.index=index;
        $rootScope.$broadcast("selectgroup");
        $rootScope.$broadcast("setlistname");
    }
}])


app.controller("taskCtrl",["$scope","$rootScope","userData","selectgroup","selecttask",function ($scope,$rootScope,userData,selectgroup,selecttask) {
    $scope.taskName="";
    $scope.taskDate="";
    $scope.taskDes="";
    $scope.selectgroup=0;
    $scope.groupName=userData.listgroup[$scope.selectgroup].groupname;
    $scope.taskGroup=userData.listgroup[$scope.selectgroup].taskgroup;
    
    $scope.$on("selectgroup",function(){
        $scope.selectgroup=selectgroup.index;
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
                "date":$scope.taskDate,
                "description":$scope.taskDes
            })
            $scope.$broadcast("selectgroup");
            $scope.taskName="";
            $scope.taskDate="";
            $scope.taskDes="";
            $scope.jshow=false;
            
            localStorage.user=JSON.stringify(userData);
        }else{
            alert("任务名不能为空");
        }
    }
    
    $scope.done=function(index) {
        userData.listgroup[$scope.selectgroup].donegroup.push(userData.listgroup[$scope.selectgroup].taskgroup[index]);
        userData.listgroup[$scope.selectgroup].taskgroup.splice(index,1);
        localStorage.user=JSON.stringify(userData);
    }
    
    $scope.remove=function(index){
        userData.listgroup[$scope.selectgroup].taskgroup.splice(index,1);
        localStorage.user=JSON.stringify(userData);
    }
    
    $scope.changeSidebar=function(){
        $rootScope.$broadcast("changeStatus");
    }
    
    $scope.modifyTask=function(index){
        selecttask.groupindex=$scope.selectgroup;
        selecttask.taskindex=index;
        $rootScope.$broadcast("setTask");
    }
}])


app.controller("taskModifyCtrl",["$scope","$rootScope","userData","selecttask",function($scope,$rootScope,userData,selecttask){
    $scope.$on("setTask",function(){
        $scope.task=userData.listgroup[selecttask.groupindex].taskgroup[selecttask.taskindex];
        $scope.taskName=$scope.task.name;
        $scope.taskDate=$scope.task.date;
        $scope.taskDes=$scope.task.description;    
    })
    
    $scope.modify=function(){
        if($scope.taskName && $scope.taskDate){
            userData.listgroup[selecttask.groupindex].taskgroup[selecttask.taskindex].name=$scope.taskName;
            userData.listgroup[selecttask.groupindex].taskgroup[selecttask.taskindex].date=$scope.taskDate;
            userData.listgroup[selecttask.groupindex].taskgroup[selecttask.taskindex].description=$scope.taskDes;
            $rootScope.$broadcast("selectgroup");
            $scope.taskName="";
            $scope.taskDate="";
            $scope.taskDes="";
            
            localStorage.user=JSON.stringify(userData);
        }else{
            alert("任务名不能为空");
        }
    }
}])


app.controller("footCtrl",["$scope","$rootScope","userData","selectgroup",function($scope,$rootScope,userData,selectgroup){
    
    $scope.$on("selectgroup",function(){
        $scope.tasklist=userData.listgroup[selectgroup.index].taskgroup;
    })
    
    $scope.tasklist=userData.listgroup[selectgroup.index].taskgroup;
}])
