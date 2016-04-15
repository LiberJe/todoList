var app=angular.module("app",[]);

app.controller("parantCtrl",function($scope,$rootScope){
    $rootScope.tasklist=[];
    $rootScope.donelist=[];
    $rootScope.taskfilter="";
})

app.controller("headCtrl",function($scope,$rootScope){
    $scope.transit=function() {
        $rootScope.taskfilter=$scope.taskfilter;
    }
})

app.controller("taskCtrl",function ($scope,$rootScope) {
    $scope.jshow=false;
    
    $scope.addTask=function() {
        $scope.jshow=true;
        console.log($rootScope.taskfilter);
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
})


app.controller("footCtrl",function($scope,$rootScope){
    
})

app.directive("dateselect",function(){
    return{
        restrict:"A",
        link:function(scope,element,attrs){
            element.datepicker();
        }
    }
})

