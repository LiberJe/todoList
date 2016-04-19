app.controller("parantCtrl",function($scope,$rootScope){
    $rootScope.tasklist=[];
    $rootScope.donelist=[];
    $rootScope.taskfilter="";
    $rootScope.userData="";
    
    if(localStorage.user){
        $rootScope.userData=JSON.parse(localStorage.user);
    }else{
        $rootScope.userData={
            "username":"JeLewine",
            "list":[]
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

app.controller("sidebarCtrl",["$scope","$rootScope",function($scope,$rootScope){
    $scope.listName="";
    $scope.listType="";
    $scope.lshow=false;
    
    $scope.addList=function(){
        $scope.lshow=true;
    }
    
    $scope.cancel=function() {
        $scope.lshow=false;
    }
    
    $scope.addon=function(){
        if($scope.listName){
            $rootScope.userData.list.push({
                "listname":$scope.listName,
                "listtype":$scope.listType,
                "listarr":[]
            })
            
            $scope.listName="";
            $scope.lshow=false;
            console.log($rootScope.userData.list);
        }else{
            alert("任务列表名不能为空");
        }
    }
}])


app.controller("taskCtrl",["$scope","$rootScope",function ($scope,$rootScope) {
    $scope.jshow=false;
    
    $scope.addTask=function() {
        $scope.jshow=true;
    }
    
    $scope.cancel=function() {
        $scope.jshow=false;
    }
    
    $scope.addon=function(){
        if($scope.taskName && $scope.taskDate){
            $rootScope.tasklist.push({
                "name":$scope.taskName,
                "date":$scope.taskDate
            })
            $scope.taskName="";
            $scope.taskDate="";
            $scope.jshow=false;
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
